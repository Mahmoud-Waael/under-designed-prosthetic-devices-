(function(){
  var reduceMotion = window.matchMedia('(prefers-reduced-motion: reduce)').matches;
  var hasHover = window.matchMedia('(hover: hover) and (pointer: fine)').matches;

  /* nav scroll state */
  var header = document.getElementById('siteHeader');
  window.addEventListener('scroll', function(){
    header.classList.toggle('scrolled', window.scrollY > 20);
  });

  /* mobile nav toggle */
  var toggle = document.getElementById('navToggle');
  var links = document.getElementById('navLinks');
  toggle.addEventListener('click', function(){ links.classList.toggle('open'); });
  links.querySelectorAll('a').forEach(function(a){
    a.addEventListener('click', function(){ links.classList.remove('open'); });
  });

  /* scroll reveal */
  var revealEls = document.querySelectorAll('.reveal');
  var io = new IntersectionObserver(function(entries){
    entries.forEach(function(entry, i){
      if(entry.isIntersecting){
        entry.target.style.transitionDelay = (i % 3) * 90 + 'ms';
        entry.target.classList.add('is-visible');
      }
    });
  }, { threshold: 0.15 });
  revealEls.forEach(function(el){ io.observe(el); });

  /* product card grid staggering + tilt */
  document.querySelectorAll('.product-card').forEach(function(card, idx){
    var inner = card.querySelector('.product-card-inner');
    if(hasHover && !reduceMotion){
      card.addEventListener('mousemove', function(e){
        var rect = card.getBoundingClientRect();
        var x = (e.clientX - rect.left) / rect.width - 0.5;
        var y = (e.clientY - rect.top) / rect.height - 0.5;
        inner.style.transform = 'rotateX(' + (-y * 10) + 'deg) rotateY(' + (x * 10) + 'deg) scale3d(1.02,1.02,1.02)';
      });
      card.addEventListener('mouseleave', function(){
        inner.style.transform = 'rotateX(0) rotateY(0) scale3d(1,1,1)';
      });
    }
  });

  /* stat counters */
  var aboutSection = document.getElementById('about');
  var counted = false;
  var statObserver = new IntersectionObserver(function(entries){
    entries.forEach(function(entry){
      if(entry.isIntersecting && !counted){
        counted = true;
        document.querySelectorAll('.stat-bar-fill').forEach(function(bar){
          bar.style.width = bar.getAttribute('data-width');
        });
        document.querySelectorAll('[data-count]').forEach(function(el){
          var target = parseInt(el.getAttribute('data-count'), 10);
          var suffix = el.getAttribute('data-suffix') || '';
          if(reduceMotion){ el.textContent = target.toLocaleString() + suffix; return; }
          var start = performance.now();
          var dur = 1400;
          function tick(now){
            var p = Math.min((now - start) / dur, 1);
            var eased = 1 - Math.pow(1 - p, 3);
            var val = Math.round(target * eased);
            el.textContent = val.toLocaleString() + suffix;
            if(p < 1) requestAnimationFrame(tick);
          }
          requestAnimationFrame(tick);
        });
      }
    });
  }, { threshold: 0.4 });
  statObserver.observe(aboutSection);

  /* hero exploded-diagram assembly + parallax */
  var stage = document.getElementById('heroStage');
  var layers = stage.querySelectorAll('.limb-layer');
  window.addEventListener('load', function(){
    setTimeout(function(){
      layers.forEach(function(l){ l.style.transform = 'translate3d(0,0,0) rotate(0deg)'; });
    }, 250);
  });
  if(hasHover && !reduceMotion){
    stage.addEventListener('mousemove', function(e){
      var rect = stage.getBoundingClientRect();
      var x = (e.clientX - rect.left) / rect.width - 0.5;
      var y = (e.clientY - rect.top) / rect.height - 0.5;
      layers.forEach(function(l, i){
        var depth = (i + 1) * 6;
        l.style.transform = 'translate3d(' + (x * depth) + 'px,' + (y * depth) + 'px,0) rotate(0deg)';
      });
    });
    stage.addEventListener('mouseleave', function(){
      layers.forEach(function(l){ l.style.transform = 'translate3d(0,0,0) rotate(0deg)'; });
    });
  }

  /* magnetic buttons */
  if(hasHover && !reduceMotion){
    document.querySelectorAll('.magnetic').forEach(function(btn){
      btn.addEventListener('mousemove', function(e){
        var rect = btn.getBoundingClientRect();
        var x = (e.clientX - rect.left) / rect.width - 0.5;
        var y = (e.clientY - rect.top) / rect.height - 0.5;
        btn.style.transform = 'translate(' + (x * 8) + 'px,' + (y * 8) + 'px)';
      });
      btn.addEventListener('mouseleave', function(){ btn.style.transform = 'translate(0,0)'; });
    });
  }
})();

