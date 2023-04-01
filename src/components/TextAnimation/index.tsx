import React, { useState, useEffect } from 'react'

type TextAnimationProps = {
  phrases: string[]
}

const TextAnimation = ({ phrases }: TextAnimationProps) => {
  const [text, setText] = useState('')
  const [phraseId, setPhraseId] = useState(0)

  const onPhraseComplete = () => {
    setTimeout(async () => {
      await eraseText()
      setTimeout(() => {
        setPhraseId(phraseId === phrases.length - 1 ? 0 : phraseId + 1)
      }, 1000)
    }, 3000)
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
      }, 100)
    })
  }

  useEffect(() => {
    let count = 0
    let timer: NodeJS.Timeout

    const getRandomTimeout = () => {
      const lambda = 1 / 200 // Parámetro de la distribución exponencial (1 / valor esperado)
      const randomValue = Math.random()
      const timeout = -Math.log(1 - randomValue) / lambda
      return Math.min(timeout, 200) // Limitamos el tiempo máximo a 400 ms
    }

    const animateText = () => {
      const shouldBackspace = Math.random() < 0.2 && count > 0
      if (shouldBackspace) {
        count--
      } else {
        setText(phrases[phraseId].slice(0, count))
        count++
      }
      if (count === phrases[phraseId].length + 1) {
        onPhraseComplete() // Ejecuta la función onPhraseComplete cuando la frase esté completa
        clearInterval(timer)
      } else {
        const timeout = getRandomTimeout() // Utiliza la función para obtener un tiempo aleatorio
        timer = setTimeout(animateText, timeout)
      }
    }

    timer = setTimeout(animateText, 100)
    return () => clearTimeout(timer)
  }, [phrases[phraseId]])

  return <>{text}</>
}

export default TextAnimation

function setText(arg0: any) {
  throw new Error('Function not implemented.')
}


function onPhraseComplete() {
  throw new Error('Function not implemented.')
}
