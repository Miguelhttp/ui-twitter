import { FormEvent, useState, KeyboardEvent } from "react"
import { Tweet } from "../components/Tweet"
import { Header } from "../components/Header"
import { Separator } from "../components/Separator"

import './TimeLine.css'

export function TimeLine () {
  const [newTweet, setNewTweet] = useState('')
  const [tweets, setTweets] = useState([
    'Meu primeiro tweet', 
    'Teste',
    'Deu certo!'
  ])

  function createNewTweet(event: FormEvent) {
    event.preventDefault()

    setTweets([ ...tweets, newTweet ])
    setNewTweet('')
  }

  function handleHotKeySubmit(event: KeyboardEvent) {
    if (event.key === 'Enter' && (event.ctrlKey || event.metaKey)) {
    setTweets([ ...tweets, newTweet ])
    setNewTweet('')
    }
  }


  return (
    <main className="timeline">
      <Header title="Home" />

        <form onSubmit={createNewTweet} className="new-tweet-form">
          <label htmlFor="tweet">
            <img src="https://github.com/Miguelhttp.png" alt="Miguel Braga" />
            <textarea 
              id="tweet" 
              placeholder="Whats happening?" 
              value={newTweet}
              onKeyDown={handleHotKeySubmit}
              onChange={(event) => {
                setNewTweet(event.target.value)
              }} />
          </label>

          <button type="submit">Tweet</button>
        </form>

        <Separator />

        {tweets.map(tweet => {
          return <Tweet key={tweet} content={tweet} />
        })}

    </main>
  )
}