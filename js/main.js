let sliderIndex = 1;
const layers = [...document.querySelectorAll('.layer')];
const elementsToGlich = [...document.querySelectorAll('main > span'), ...document.querySelectorAll('.footer > div > span:nth-of-type(2)')];

function switchLayer(step = 1) {
  glich();
  const nextSlide = (sliderIndex + step) % 4 === 0 ? 4 : (sliderIndex + step) % 4;
  for(let i of layers) {
    i.classList.remove('layer-displayed');
    i.classList.remove('layer-displayed-exit');
    if(i.dataset.scene == nextSlide) {
      i.classList.add('layer-displayed');
    }
    if(i.dataset.scene == sliderIndex) {
      i.classList.add('layer-displayed-exit');
    }
  }
  sliderIndex = nextSlide;
}

function randomString(length = 1) {
  return [...Array(length)].map(i=>(~~(Math.random()*36)).toString(36)).join('')
}

function toggleGlitch(el, active = true) {
  const children = [...el.children];
  if(active) {
    children.forEach(child => {
      child.classList.remove('displayed');
    });
    children[children.length - 1].classList.add('displayed');  
  } else {
    const childToDisplay = children.length > 2 ? sliderIndex - 1 : 0;
  children[childToDisplay].classList.add('displayed');
  children[children.length - 1].classList.remove('displayed');
  }
}

const heroNumber = document.querySelector('.hero__number');

function animateNumber() {
  setTimeout(() => {
    heroNumber.children[0].innerText = '0' + sliderIndex;
  }, 850);
}

function glich() {
  elementsToGlich.forEach(el => {
    toggleGlitch(el);
  });
  
  const interval = setInterval(() => {
    elementsToGlich.forEach(el => {
      el.children[el.children.length - 1].innerText = randomString(el.children[0].innerText.length);
    });
  }, 50);
  
  setTimeout(() => {
    clearInterval(interval);
    elementsToGlich.forEach(el => {
      toggleGlitch(el, false);
  });
  }, 1000);
  
  animateNumber();
}


  var animation;

  gsap.registerPlugin(MotionPathPlugin, ScrollTrigger);

  gsap.set("#motionSVG", {
    scale: 0.3,
    autoAlpha: 1
  });
  gsap.set("#spaceS", {
    transformOrigin: "50% 50%"
  });

  animation = gsap.to("#motionSVG", {
    scrollTrigger: {
      trigger: "#motionPath",
      start: "top 10%",
      end: "bottom -260%",
      scrub: 1,
      onUpdate: self => {
        gsap.to("#spaceS", {
          rotation: () => self.direction === 1 ? 0 : 180,
          overwrite: 'auto'
        });
      }
    },
    duration: 10,
    ease: "none",
    immediateRender: true,
    motionPath: {
      path: "#motionPath",
      align: "#motionPath",
      alignOrigin: [0.5, 0.5],
      autoRotate: 90,
    }
  });

  jQuery(document).ready(function(){
    jQuery('.skillbar').each(function(){
      jQuery(this).find('.skillbar-bar').animate({
        width:jQuery(this).attr('data-percent')
      },6000);
    });
  });

$(document).ready(function () {
  var typingBool = false;
  var typingIdx = 0;
  var liIndex = 0;
  var liLength = $(".typing-txt1>ul>li").length;

  // 타이핑될 텍스트를 가져온다
  var typingTxt = $(".typing-txt1>ul>li").eq(liIndex).text();
  typingTxt = typingTxt.split(""); // 한글자씩 자른다.
  if (typingBool == false) {
    // 타이핑이 진행되지 않았다면
    typingBool = true;
    var tyInt = setInterval(typing, 100); // 반복동작
  }

  function typing() {
    $(".typing1 ul li").removeClass("on");
    $(".typing1 ul li").eq(liIndex).addClass("on");
    if (typingIdx < typingTxt.length) {
      // 타이핑될 텍스트 길이만큼 반복
      $(".typing1 ul li").eq(liIndex).append(typingTxt[typingIdx]); // 한글자씩 이어준다.
      typingIdx++;
    } else {
      if (liIndex < liLength - 1) {
        //다음문장으로  가기위해 인덱스를 1증가
        liIndex++;
        //다음문장을 타이핑하기위한 셋팅
        typingIdx = 0;
        typingBool = false;
        typingTxt = $(".typing-txt1>ul>li").eq(liIndex).text();

        //다음문장 타이핑전 1초 쉰다
        clearInterval(tyInt);
        //타이핑종료

        setTimeout(function () {
          //1초후에 다시 타이핑 반복 시작
          tyInt = setInterval(typing, 100);
        }, 1000);
      } else if (liIndex == liLength - 1) {
        //마지막 문장까지 써지면 반복종료
        clearInterval(tyInt);
      }
    }
  }
});
$(document).ready(function () {
  var typingBool2 = false;
  var typingIdx2 = 0;
  var liIndex2 = 0;
  var liLength2 = $(".typing-txt2>ul>li").length;

  // 타이핑될 텍스트를 가져온다
  var typingTxt2 = $(".typing-txt2>ul>li").eq(liIndex2).text();
  typingTxt2 = typingTxt2.split(""); // 한글자씩 자른다.
  if (typingBool2 == false) {
    // 타이핑이 진행되지 않았다면
    typingBool2 = true;
    var tyInt2 = setInterval(typing, 100); // 반복동작
  }

  function typing() {
    $(".typing2 ul li").removeClass("on");
    $(".typing2 ul li").eq(liIndex2).addClass("on");
    if (typingIdx2 < typingTxt2.length) {
      // 타이핑될 텍스트 길이만큼 반복
      $(".typing2 ul li").eq(liIndex2).append(typingTxt2[typingIdx2]); // 한글자씩 이어준다.
      typingIdx2++;
    } else {
      if (liIndex2 < liLength2 - 1) {
        //다음문장으로  가기위해 인덱스를 1증가
        liIndex2++;
        //다음문장을 타이핑하기위한 셋팅
        typingIdx2 = 0;
        typingBool2 = false;
        typingTxt2 = $(".typing-txt2>ul>li").eq(liIndex2).text();

        //다음문장 타이핑전 1초 쉰다
        clearInterval(tyInt2);
        //타이핑종료

        setTimeout(function () {
          //1초후에 다시 타이핑 반복 시작
          tyInt2 = setInterval(typing, 10);
        }, 1000);
      } else if (liIndex2 == liLength2 - 1) {
        //마지막 문장까지 써지면 반복종료
        clearInterval(tyInt2);
      }
    }
  }
  $(document).ready(function () {
  var typingBool3 = false; 
  var typingIdx3=0; 
  var liIndex3 = 0;
  var liLength3 = $(".typing-txt3>ul>li").length;
  
  // 타이핑될 텍스트를 가져온다 
  var typingTxt3 = $(".typing-txt3>ul>li").eq(liIndex3).text(); 
  //liIndex 인덱스로 구분해 한줄씩 가져옴
  
  typingTxt3=typingTxt3.split(""); // 한글자씩 잘라 배열로만든다
  
  if(typingBool3==false){ // 타이핑이 진행되지 않았다면 
      typingBool3=true; 
      var tyInt3 = setInterval(typing,100); // 반복동작 
  } 
       
  function typing(){ 
    $(".typing3 ul li").removeClass("on");
     $(".typing3 ul li").eq(liIndex3).addClass("on");
    //현재 타이핑되는 문장에만 커서 애니메이션을 넣어준다.
    
    if(typingIdx3<typingTxt3.length){ // 타이핑될 텍스트 길이만큼 반복 
       $(".typing3 ul li").eq(liIndex3).append(typingTxt3[typingIdx3]); // 한글자씩 이어준다. 
       typingIdx3++; 
     } else{ //한문장이끝나면
       if(liIndex3<liLength3-1){
       //다음문장으로  가기위해 인덱스를 1증가
         liIndex3++; 
       //다음문장을 타이핑하기위한 셋팅
          typingIdx3=0;
          typingBool3 = false; 
          typingTxt3 = $(".typing-txt3>ul>li").eq(liIndex3).text(); 
         
       //다음문장 타이핑전 1초 쉰다
           clearInterval(tyInt3);
            //타이핑종료
       
           setTimeout(function(){
             //1초후에 다시 타이핑 반복 시작
             tyInt3 = setInterval(typing,100);
           },1000);
          } else if(liIndex3==liLength3-1){
            
           //마지막 문장까지 써지면 반복종료
             clearInterval(tyInt3);
            
            //1초후
            setTimeout(function(){
              //사용했던 변수 초기화
              typingBool3 = false; 
            liIndex3=0;
            typingIdx3=-0;
              
              //첫번째 문장으로 셋팅
            typingTxt3 = $(".typing-txt3>ul>li").eq(liIndex3).text(); 
                 //타이핑 결과 모두 지우기
            $(".typing3 ul li").html("")
              
              //반복시작
              tyInt3 = setInterval(typing,100);
            }, 1000);
            
            
          }
      } 
  }  
});
  var target = document.querySelectorAll('.btn_open');
var btnPopClose = document.querySelectorAll('.pop_wrap .btn_close');
var targetID;

// 팝업 열기
for(var i = 0; i < target.length; i++){
  target[i].addEventListener('click', function(){
    targetID = this.getAttribute('href');
    document.querySelector(targetID).style.display = 'block';
  });
}

// 팝업 닫기
for(var j = 0; j < target.length; j++){
  btnPopClose[j].addEventListener('click', function(){
    this.parentNode.parentNode.style.display = 'none';
  });
}
(function () {
  emailjs.init("L35EJ_6-F5GjUgU98");
})();


$('input[type=button]').click(function () {

  var noName = $.trim($("input[type=text]").val());
  var noEmail = $.trim($("input[type=email]").val());
  var noMessage = $.trim($("textarea").val());
  if (!noName) {
    alert("이름을 입력해주세요");
  }
  if (!noEmail) {
    alert("메일을 입력해주세요");
  }
  if (!noMessage) {
    alert("메세지 내용을 입력해주세요");
  } else {


    var templateParams = {
      name: $('#name').val(),
      email: $('#email').val(),
      message: $('#message').val()
    };

    emailjs.send('winston_mail', 'winston_temp', templateParams)
      .then(function (response) {
        $('.mail .send').addClass('on')
      }, function (error) {
        alert('메일 감사하드립니다. 최대한빨리 확인하겠습니다.')
      });

  }
});


$('.mail .send>p').eq(1).click(function () {
  $('.mail .send').removeClass('on')
})


});
$(function() {
  $(".top_btn").click(function() {
    $("html").animate({
      scrollTop: 0
    }, 1000)
  })
})
function progress() {

  var windowScrollTop = $(window).scrollTop();
  var docHeight = $(document).height();
  var windowHeight = $(window).height();
  var progress = (windowScrollTop / (docHeight - windowHeight)) * 100;
  var $bgColor = progress > 99 ? '#4db792' : '#EF4E31';
  var $textColor = progress > 99 ? '#fff' : '#333';

  $('.progress .bar').width(progress + '%').css({ backgroundColor: $bgColor });
  $('#h1').text( Math.round(progress) + '%').css({ color: $textColor });
  $('.fill').height(progress + '%').css({ backgroundColor: $bgColor });
}

progress();

$(document).on('scroll', progress);

$('.Menu ul li').click(function(e){
  e.preventDefault();
  var $anchor = $(this).find('a');
  $('html, body').stop().animate({
      scrollTop:$($anchor.attr('href')).offset().top+100
  },500);
});

$(function () {
  var i = 1;
  var interval = setInterval(function () {
      $('.cats .iru a img').attr({
          src: 'img/iru/iru' + i + '.png'
      });
      $('.cats .lira a img').attr({
          src: 'img/lira/lira' + i + '.png'
      });
      $('.cats .ume a img').attr({
          src: 'img/ume/ume' + i + '.png'
      });
      $('.cats .liu a img').attr({
          src: 'img/liu/liu' + i + '.png'
      });
      i++;
      if (i === 11) i = 1;
  }, 200); 
});