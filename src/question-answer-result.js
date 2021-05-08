
class Question 
{
 constructor(text,answers)
 {
    this.text=text;
    this.answers=answers;
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