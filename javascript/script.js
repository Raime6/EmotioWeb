let slideIndex = 0;

function showSlides() 
{
  const slides = document.querySelectorAll('.slides img');
  if (slideIndex >= slides.length) 
    {
        slideIndex = 0;
    }

  else if (slideIndex < 0) 
    {
        slideIndex = slides.length - 1;
    }

  slides.forEach((slide) => 
    {
        slide.style.transform = 'translateX(' + (-slideIndex * 100) + '%)';
    });
}

function prevSlide() 
{
  slideIndex--;
  showSlides();
}

function nextSlide() 
{
  slideIndex++;
  showSlides();
}

showSlides();
