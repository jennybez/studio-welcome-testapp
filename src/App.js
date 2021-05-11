import React, {Component} from 'react';
import "survey-react/survey.css";
import * as Survey from "survey-react";
class App extends Component{
    constructor(props){
        super(props)
        this.state = {

        }
        this.onCompleteComponent = this.onCompleteComponent.bind(this)
    }
    onCompleteComponent = () => {
        this.setState ({
            isCompleted: true
        })
    }
   render () {
    var json ={
        "title": "question3",
        "pages": [
         {
          "name": "page1",
          "elements": [
           {
            "type": "imagepicker",
            "name": "question1",
            "isRequired": true,
            "hasComment": true,
            "commentText": "some comment",
            "choices": [
             {
              "value": "lion",
              "imageLink": "https://surveyjs.io/Content/Images/examples/image-picker/lion.jpg"
             },
             {
              "value": "giraffe",
              "imageLink": "https://surveyjs.io/Content/Images/examples/image-picker/giraffe.jpg"
             },
             {
              "value": "panda",
              "imageLink": "https://surveyjs.io/Content/Images/examples/image-picker/panda.jpg"
             },
             {
              "value": "camel",
              "imageLink": "https://surveyjs.io/Content/Images/examples/image-picker/camel.jpg"
             }
            ]
           },
           {
            "type": "radiogroup",
            "name": "question4",
            "choices": [
             "item1",
             "item2",
             "item3"
            ]
           }
          ]
         },
         {
          "name": "page2",
          "elements": [
           {
            "type": "dropdown",
            "name": "question2",
            "choices": [
             "item1",
             "item2",
             "item3"
            ]
           },
           {
            "type": "signaturepad",
            "name": "question3"
           }
          ]
         }
        ]
       };
       var surveyRender = !this.state.isCompleted ? (
           <Survey.Survey
           json={json}
           showCompletedPage = {false}
           onComplete = {this.onCompleteComponent}

           />
       ) : null
       var onSurveyCompletion = this.state.isCompleted ? (
           <div>
               Пасиб что прошли опрос
           </div>
       ) : null;
    return (
        <div className="App">
            <div>
                {surveyRender}
                {onSurveyCompletion}

            </div>
        </div>
    );
    }
}
export default App;