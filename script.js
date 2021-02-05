function calculate()
{
    var maths=Number(document.getElementById('maths').value);
    var physics=Number(document.getElementById('physics').value);
    var chemistry=Number(document.getElementById('chemistry').value);
    var english=Number(document.getElementById('english').value);
    var percentage=((maths+physics+chemistry+english)*100)/400;
    document.getElementById('percentage').innerHTML='Your percentage is:'+percentage;
    var grade=document.getElementById('grade');
    var message=document.getElementById('message');
    if(percentage>=90&&percentage<=100)
    {
        grade.innerHTML='Your grade is: A+';
        message.innerHTML='Congratulations! you have passed the exams';
    }
    else if(percentage>=80&&percentage<90)
    {
        grade.innerHTML="Your grade is: A";
        
        message.innerHTML='Congratulations! you have passed the exams';
    }
    else if(percentage>=70&&percentage<80)
    {
        grade.innerHTML="Your grade is: B+";
        
        message.innerHTML='Congratulations! you have passed the exams';
    }
    else if(percentage>=60&&percentage<70)
    {
        grade.innerHTML="Your grade is: B";
        
        message.innerHTML='Congratulations! you have passed the exams';
    }
    else if(percentage>=50&&percentage<60)
    {
        grade.innerHTML="Your grade is: C";
        
        message.innerHTML='Congratulations! you have passed the exams';
    }
    else if(percentage>=40&&percentage<50)
    {
        grade.innerHTML="Your grade is: B";
        
        message.innerHTML='Congratulations! you have passed the exams';
    }
    else 
    {
        grade.innerHTML="Your grade is: F";
        
        message.innerHTML='Sorry!You failed the exam';
        message.style.background='red';
    }
}
