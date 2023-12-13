import React, { useState } from 'react';
import ReactMarkdown from 'react-markdown';

const MarkdownEditor = () => {import React, { useState } from 'react';
import ReactMarkdown from 'react-markdown';

const MarkdownEditor = () => {
  const [markdown, setMarkdown] = useState('type markdown here');

  const handleInputChange = (event) => {
    setMarkdown(event.target.value);
  };

  return (
    <div>
      <textarea 
        value={markdown} 
        onChange={handleInputChange} 
      />
      <ReactMarkdown>
        {markdown}
      </ReactMarkdown>
    </div>
  );
};

export default MarkdownEditor;

function reverseSentence(sentence) {
    let words = sentence.split(' ');
    let reversedWords = words.reverse();
    let reversedSentence = reversedWords.join(' ');
    return reversedSentence.charAt(0).toUpperCase() + reversedSentence.slice(1);
}

const names = data.flat().map(item => item.name);

const names = data.flat().map(item => item.name);
const data = [
    [
        { name: 'John', age: 25 },
        { name: 'Jane', age: 30 }
    ],
    [
        { name: 'Bob', age: 40 }
    ]
];