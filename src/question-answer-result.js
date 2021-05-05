
class Question 
{
 constructor(text)
 {
    this.text=text;
 }
 makeQuest() // создание вопроса и вывод его на экран
 {
    alert(this.text)
 }
}
class Answer
{
   constructor(text)
   {
      this.text = text;
   }
   constructor (text,media)
   {
      this.text=text;
      this.media=media;
       
   }
   mediaAnswer(textAnsw,mediaAnsw)
   {
      /*реализация генерации кнопки-картинки с полем объяснения ниже (+анимированные прямоугольники) */
   }
   simpleAnswer(textAnsw)
   {
      /*реализация генерации кнопки в виде текста на выбор */
   }
}