import React from 'react'
import './xmlGenerator.scss'
function XmlGenerator() {
  return (
    <div className='XmlGenerator'>
        <div className="XmlHeader">
            <p className="xmlTitle">Provide Xml Header</p>
            <textarea>
            </textarea>
        </div>
        <div className="XmlHeader">
            <p className="xmlTitle">Provide XML Template Here</p>
            <textarea>
            </textarea>
        </div> <div className="XmlHeader">
            <p className="xmlTitle">Input Data Seperated By Comma</p>
            <textarea>
            </textarea>
        </div> <div className="XmlHeader">
            <p className="xmlTitle">Provide Xml Footer</p>
            <textarea>
            </textarea>
        </div>
        <div className="xmlGeneratorBtns">
            <button>Generate</button>
            <button> Refresh</button>
        </div>
        <div className="XmlHeader">
            <p className="xmlTitle-Output">Xml Output</p>
            <textarea>
            </textarea>
        </div>
    </div>
  )
}

export default XmlGenerator