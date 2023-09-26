var currentDate = dayjs();
$('#currentDate').text(currentDate.format('dddd, MMMM D'));


$("#hour-9.description").val(localStorage.getItem("hour-9"));
$("#hour-10.description").val(localStorage.getItem("hour-10"));
$("#hour-11.description").val(localStorage.getItem("hour-11"));
$("#hour-12.description").val(localStorage.getItem("hour-12"));
$("#hour-1.description").val(localStorage.getItem("hour-1"));
$("#hour-2.description").val(localStorage.getItem("hour-2"));
$("#hour-3.description").val(localStorage.getItem("hour-3"));
$("#hour-4.description").val(localStorage.getItem("hour-4"));
$("#hour-5.description").val(localStorage.getItem("hour-5"));

  

  
  $(".description").each(function() {
    var timeBlock = $(this).parent().attr("id");
    var savedData = localStorage.getItem(timeBlock);
    if (savedData) {
      $(this).val(savedData);
    }
  });
  
  $(".saveBtn").on("click", function() {
    var timeBlock = $(this).parent().attr("id");
    var description = $(this).siblings(".description").val();
    localStorage.setItem(timeBlock, description);
  });

  const currentHour = dayjs().format("H");

  const timeBlocks = document.querySelectorAll('.time-block');
  timeBlocks.forEach((block) => {
    const blockHour = parseInt(block.id.split('-')[8]);

    
    if (blockHour === currentHour) {
      $(this).removeClass("future" , "past");
      $(this).addClass("present");
    
    } 

    else if (blockHour < currentHour) {
      $(this).removeClass("future" , "present");
      $(this).addClass("past");
    } 
    else (blockHour > currentHour); {
      $(this).removeClass("present" , "past");
      $(this).addClass("future");
    }
  });

