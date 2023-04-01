import React, { useState, useEffect } from 'react'

type TextAnimationProps = {
  phrases: string[],
  typingSpeed: number,
  backspaceDelay: number,
  eraseDelay: number,
  timeComplete?: number,
  errorProbability: number,
}

const TextAnimation = ({
  phrases,
  typingSpeed,
  backspaceDelay,
  eraseDelay,
  errorProbability,
  timeComplete = 3000
}: TextAnimationProps) => {
  const [text, setText] = useState('')
  const [changePhrase, setChangePhrase] = useState(1)
  const [phraseId, setPhraseId] = useState(0)

  const onPhraseComplete = () => {
    setTimeout(async () => {
      await eraseText()
      setTimeout(() => {
        setChangePhrase(changePhrase + 1)
        setPhraseId(phraseId === phrases.length - 1 ? 0 : phraseId + 1)
      }, eraseDelay)
    }, timeComplete)
  }

  const eraseText = () => {
    return new Promise<void>((resolve) => {
      let count = phrases[phraseId].length
      const timer = setInterval(() => {
        setText(phrases[phraseId].slice(0, count))
        count--
        if (count < 0) {
          clearInterval(timer)
          resolve()
        }
      }, backspaceDelay)
    })
  }

  useEffect(() => {
    let count = 0
    let timer: NodeJS.Timeout

    const getRandomTimeout = () => {
      const lambda = 1 / typingSpeed
      const randomValue = Math.random()
      const timeout = -Math.log(1 - randomValue) / lambda
      return Math.min(timeout, 200)
    }

    const animateText = () => {
      const shouldBackspace = Math.random() < errorProbability && count > 0 // Modificado para utilizar el nuevo parámetro errorProbability
      if (shouldBackspace) {
        count--
      } else {
        setText(phrases[phraseId].slice(0, count))
        count++
      }
      if (count === phrases[phraseId].length + 1) {
        onPhraseComplete()
        clearInterval(timer)
      } else {
        const timeout = getRandomTimeout()
        timer = setTimeout(animateText, timeout)
      }
    }

    timer = setTimeout(animateText, 100)
    return () => clearTimeout(timer)
  }, [changePhrase])

  return <>{text}</>
}

export default TextAnimation
