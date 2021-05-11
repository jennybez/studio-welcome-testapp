
class Question 
{
 constructor(text,answers)
 {
    this.text=text;
    this.answers=answers;
 }
 Click(index)
 {
     return this.answers[index].value;
 }
}
class Answer
{
   constructor(text,numQuest)
   {
      this.text = text;
      this.numQuest=numQuest;
   }
   constructor (text,media,numQuest)
   {
      this.text=text;
      this.media=media;
      this.numQuest=numQuest;
   }
   mediaAnswer(textAnsw,mediaAnsw,ind)
   {
      /*реализация генерации кнопки-картинки с полем объяснения ниже (+анимированные прямоугольники) */
   }
   simpleAnswer(textAnsw,ind)
   {
     textAnsw=this.text;
   
      /*реализация генерации кнопки в виде текста на выбор */
   }
}
class Quiz
{
   constructor(type, questions, results)
   {
       //Тип теста: 1 - классический тест с правильными ответами, 2 - тест без правильных ответов
       this.type = type;
 
       //Массив с вопросами
       this.questions = questions;
 
       //Массив с возможными результатами
       this.results = results;
 
       //Номер результата из массива
       this.result = 0;
 
       //Номер текущего вопроса
       this.current = 0;
   }
 
   Click(index)
   {
       let value = this.questions[this.current].Click(index);
       this.score += value;
 
       let correct = -1;
 
       //Если было добавлено хотя бы одно очко, то считаем, что ответ верный
       if(value >= 1)
       {
           correct = index;
       }
       else
       {
           //Иначе ищем, какой ответ может быть правильным
           for(let i = 0; i < this.questions[this.current].answers.length; i++)
           {
               if(this.questions[this.current].answers[i].value >= 1)
               {
                   correct = i;
                   break;
               }
           }
       }
 
       this.Next();
 
       return correct;
   }
 
   //Переход к следующему вопросу
   Next()
   {
       this.current++;
      
       if(this.current >= this.questions.length)
       {
           //переместиться на след блок
       }
   }
}