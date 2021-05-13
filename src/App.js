import React, { Component } from "react";

import * as Survey from "survey-react";
import * as SurveyPDF from "survey-pdf";

import "survey-react/modern.css";
import "./index.css";


class SurveyPdfComponent extends Component {
    constructor() {
        super();
        
    }
    render() {
        

        Survey.StylesManager.applyTheme("modern");

        const json = {
  "questions": [
    {
      "type": "text",
      "title": "Bottom description",
      "name": "pdf_adorners_bottomdesc"
    },
    {
      "type": "checkbox",
      "title": "Render checkbox question as radiogroup",
      "name": "pdf_adorners_checkboxasradio",
      "choices": [ "A", "B" ]
    },
    {
      "type": "matrix",
      "title": "Change size of question",
      "name": "pdf_adorners_changesize",
      "columns": [
        "Column 1",
        "Column 2",
        "Column 3"
      ],
      "rows": [
        "Row 1",
        "Row 2"
      ]
    },
    {
      "type": "comment",
      "title": "Render comment question as html",
      "name": "pdf_adorners_commentashtml",
      "defaultValue": "Sed venenatis nisl mi, eget lobortis augue venenatis ac.\n\nUt consectetur, nunc a tristique tempor, enim neque porttitor urna, non accumsan diam sem at erat. Suspendisse in sapien ac ligula aliquam porta a eu lorem"
    },
    {
      "type": "tagbox",
      "title": "Render only selected choices loaded via choicesByUrl",
      "name": "pdf_adorners_selectedchoices",
      "choicesByUrl": {
        "url": "https://restcountries.eu/rest/v2/all"
      },
      "defaultValue": ["Bhutan", "Chad", "France"]
    }
  ]
};
const survey = new Survey.Model(json);

        

        function saveSurveyToPdf(filename, surveyModel, pdfWidth, pdfHeight) {
   var options = {
        format: [pdfWidth, pdfHeight]
    };
    var surveyPDF = new SurveyPDF.SurveyPDF(json, options);
    surveyPDF.data = surveyModel.data;
    surveyPDF.onRenderQuestion.add(function (survey, options) {
        if (options.question.name !== "pdf_adorners_bottomdesc") return;
        var plainBricks = options.bricks[0].unfold();
        var lastBrick = plainBricks[plainBricks.length - 1];
        var point = SurveyPDF.SurveyHelper.createPoint(lastBrick);
        return new Promise(function (resolve) {
            SurveyPDF.SurveyHelper.createDescFlat(point, options.question,
                options.controller, 'Some description').then(function (descBrick) {
                options.bricks.push(descBrick);
                resolve();
            });
        });
    });
    surveyPDF.onRenderQuestion.add(function (survey, options) {
        if (options.question.name !== "pdf_adorners_checkboxasradio") return;
        var flatRadiogroup = options.repository.create(survey,
            options.question, options.controller, "radiogroup");
        return new Promise(function (resolve) {
            flatRadiogroup.generateFlats(options.point).then(function(radioBricks) {
                options.bricks = radioBricks;
                resolve();
            });
        });
     });
    surveyPDF
        .onRenderQuestion
        .add(function (survey, options) {
            if (options.question.name !== "pdf_adorners_changesize") return;
            var flatMatrix = options
                .repository
                .create(survey, options.question, options.controller, "matrix");
            var oldFontSize = options.controller.fontSize;
            options.controller.fontSize = oldFontSize / 2.0;
            return new Promise(function (resolve) {
                flatMatrix
                    .generateFlats(options.point)
                    .then(function (matrixBricks) {
                        options.controller.fontSize = oldFontSize;
                        options.bricks = matrixBricks;
                        resolve();
                    });
            });
        });
    surveyPDF
        .onRenderQuestion
        .add(function (survey, options) {
            if (options.question.getType() === "comment") {
                var htmlQuestion = Survey.QuestionFactory.Instance.createQuestion("html", "html_question");
                var paragraphs = options.question.value.split("\n");
                htmlQuestion.html = "";
                paragraphs.forEach(function(p) { htmlQuestion.html += "<p>" + p + "</p><br>" });
                var flatHtml = options
                    .repository
                    .create(survey, htmlQuestion, options.controller, "html");
                var commentBricks = options.bricks[0].unfold();
                var commentBrick = commentBricks.pop();
                var point = SurveyPDF.SurveyHelper.createPoint(commentBrick, true, true);
                return new Promise(function (resolve) {
                    flatHtml
                        .generateFlats(point)
                        .then(function (htmlBricks) {
                            options.bricks = commentBricks;
                            options.bricks = options.bricks.concat(htmlBricks);
                            resolve();
                        });
                });
            }
        });
    surveyPDF
        .onRenderQuestion
        .add(function (survey, options) {
            if (options.question.name !== "pdf_adorners_selectedchoices") return;
            var checkboxQuestion = Survey.QuestionFactory.Instance.createQuestion('checkbox', options.question.name + '_checkbox');
            checkboxQuestion.titleLocation = 'hidden';
            var selectedChoices = [];
            options.question.visibleChoices.forEach(function (choice) {
                if (options.question.isItemSelected(choice)) {
                    selectedChoices.push(choice.value);
                }
            });
            checkboxQuestion.choices = selectedChoices;
            var flatCheckbox = options.repository.create(survey, checkboxQuestion, options.controller, 'checkbox');
            var titleBrick = options.bricks[0].unfold();
            titleBrick.pop(); titleBrick.pop();
            titleBrick = new options.module.CompositeBrick(...titleBrick);
            var point = options.module.SurveyHelper.createPoint(titleBrick, true, false);
            point.yTop += options.controller.unitHeight / 2.0;
            return new Promise(function (resolve) {
                flatCheckbox
                    .generateFlats(point)
                    .then(function (checkboxBricks) {
                        options.bricks = [titleBrick];
                        options.bricks = options.bricks.concat(checkboxBricks);
                        resolve();
                    });
            });
        });
    surveyPDF.save(filename);
}
document.getElementById("saveToPDFbtn").onclick = function() {
  var pdfWidth = survey.pdfWidth || 210;
  var pdfHeight = survey.pdfHeight || 297;
  saveSurveyToPdf("surveyResult.pdf", survey, pdfWidth, pdfHeight);
};

        if (typeof survey === "undefined") return <div></div>;

        return (
            <Survey.Survey
                model={survey}
            />
        );
    }
}

export default SurveyPdfComponent;