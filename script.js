var elday=$('<p>');
elday.text(moment().format("dddd, MMMM Do YYYY"));
$('#currentDay').append(elday);

var elt=moment().set('hour', 9).format("h A");
var t1=new Date();
var t2=new Date();
t2.setHours(9);
var arr=[];


$( window ).on( "load", function()
{ for (var i=0; i<9; i++)
 { 
    var elblock =$("<div>");
    var elsave=$("<button>");
    var elhour=$("<p>");
    var eltext=$("<textarea>");
    elblock.addClass("row");
    elblock.addClass("time-block");
    var currenttime =moment().format("h A");
    
    
 
if(i===1)
 { 
     elt=moment().set('hour', 10).format("h A");
     t2.setHours(10);
}
 
else if(i===2)
{
    elt=moment().set('hour', 11).format("h A");
    t2.setHours(11);
}
else if(i===3)
{
    elt=moment().set('hour', 12).format("h A");
    t2.setHours(12);
}

else if(i===4)
{
    elt=moment().set('hour', 13).format("h A");
    t2.setHours(13);
}

else if(i===5)
{
    elt=moment().set('hour', 14).format("h A");
    t2.setHours(14);
}
else if(i===6)
{
    elt=moment().set('hour', 15).format("h A");
    t2.setHours(15);
}
else if(i===7)
{
    elt=moment().set('hour', 16).format("h A");
    t2.setHours(16);
}

else if(i===8)
{
    elt=moment().set('hour', 17).format("h A");
    t2.setHours(17);
}
    eltext.attr('id','inptext')
    elsave.attr('id', 'clicksave')
    elblock.attr('id','tblock')
    elsave.addClass("saveBtn");
    elsave.html("save");
    elblock.append(elhour);
    elblock.append(eltext);
    eltext.css("width", "1020");
    elblock.append(elsave);
    elhour.addClass("hour");
    elhour.css("width", "60");
    elsave.css("width", "60");
    elhour.append(elt);
    $('.container').append(elblock);

    if(t2.getHours()-t1.getHours()<0)
    {
    elblock.addClass("past");
    }
           
    else if (t2.getHours()-t1.getHours()>0)
    {
    elblock.addClass("future");
    }
    
    else 
    {
    elblock.addClass("present");
    }
  

}

});



