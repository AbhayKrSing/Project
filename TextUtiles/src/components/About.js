import React from 'react'
export default function About(props) {
  // const [textMode, set_textMode] = useState('light')
  // setTimeout(() => {
  //   if (props.mode === 'light') {
  //     set_textMode('dark')
  //   }
  //   else if (props.mode === 'dark') {
  //     set_textMode('light')
  //   }

  // }, 10)
  let mystyle = {
    backgroundColor: props.mode === 'light' ? 'white' : '#29296d',
    color: props.mode === 'light' ? 'black' : 'white',
    border: props.mode === 'light' ?  ''    : '1px solid grey',
    // borderRadius: props.mode === 'light' ?  ''    : '5px'
  }


  return (<>
    <div className="container" >
      <h1 style={{color: props.mode === 'light' ? 'black' : 'white'}}>About Us</h1>
      <div className={`accordion `} id="accordionExample" >
        <div className={`accordion-item`} style={mystyle} >
          <h2 className="accordion-header" id="headingOne">
            <button className={`accordion-button`} style={mystyle} type="button" data-bs-toggle="collapse" data-bs-target="#collapseOne" aria-expanded="true" aria-controls="collapseOne" >
              Analyze your Text
            </button>
          </h2>
          <div id="collapseOne" className="accordion-collapse collapse show" aria-labelledby="headingOne" data-bs-parent="#accordionExample">
            <div className="accordion-body">
              <strong>Analysing Text</strong>  <code>Textutils</code>  gives you a way to analyze your text quickly and efficiently. Be it word count, character count or
            </div>
          </div>
        </div>
        <div className={`accordion-item`} style={mystyle} >
          <h2 className="accordion-header" id="headingTwo">
            <button className={`accordion-button collapsed`} style={mystyle} type="button" data-bs-toggle="collapse" data-bs-target="#collapseTwo" aria-expanded="false" aria-controls="collapseTwo" >
              Free to Use
            </button>
          </h2>
          <div id="collapseTwo" className="accordion-collapse collapse" aria-labelledby="headingTwo" data-bs-parent="#accordionExample">
            <div className="accordion-body">
              <strong>Easy and free to use.</strong>  <code>Textutils</code> is a free character counter tool that provides instant character count & word count statistics for a given text. TextUtils reports the number of words and characters. Thus it is suitable for writing text with word/ character limit.
            </div>
          </div>
        </div>
        <div className={`accordion-item`} style={mystyle}>
          <h2 className="accordion-header" id="headingThree">
            <button className={`accordion-button collapsed `} style={mystyle} type="button" data-bs-toggle="collapse" data-bs-target="#collapseThree" aria-expanded="false" aria-controls="collapseThree" >
              Browser Compatibility
            </button>
          </h2>
          <div id="collapseThree" className="accordion-collapse collapse" aria-labelledby="headingThree" data-bs-parent="#accordionExample">
            <div className="accordion-body">
              <strong>Compatible with all Browsers.</strong>  This word counter software works in any web browsers such as Chrome, Firefox, Internet Explorer, Safari, Opera. It suits to count characters in facebook, blog, books, excel document, pdf document, essays, etc.
            </div>
          </div>
        </div>
      </div>
    </div>


  </>
  )
}
