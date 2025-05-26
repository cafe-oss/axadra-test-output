document.addEventListener("DOMContentLoaded", (event) => {
  gsap.registerPlugin(ScrollTrigger);

  const tagline = $(".tagline");
  if (tagline != 0) {
    gsap.from(tagline, {
      opacity: 0,
      x: "50%",
      duration: 1,
      ease: "power2.out",
    });
  }

  const custom_round_border_para = $(".custom-round-border > p");
  if (custom_round_border_para != 0) {
    gsap.from(custom_round_border_para, {
      opacity: 0,
      y: "50%",
      duration: 1,
      ease: "power2.out",
    });
  }

  const custom_round_border_h1 = $(".custom-round-border > h1");
  if (custom_round_border_h1 != 0) {
    gsap.from(custom_round_border_h1, {
      opacity: 0,
      y: "50%",
      duration: 1,
      ease: "power2.out",
    });
  }

});

jQuery(document).ready(function ($) {
  // Save original parent of #bg-layer-bottom
  const originalParent = $("#bg-layer-bottom").parent();

  function moveBgLayer() {
    if ($(window).width() <= 1313) {
      if (!$("#bg-layer-bottom").parent().is("figure")) {
        $("#bg-layer-bottom").appendTo("figure");
      }

      if (!$("#bg-layer-front").parent().is("figure")) {
        $("#bg-layer-front").appendTo("figure");
      }
    }

    if ($(window).width() >= 1314) {
      if ($("#bg-layer-bottom").parent().is("figure")) {
        $("#bg-layer-bottom").appendTo(originalParent);
      }

      if ($("#bg-layer-front").parent().is("figure")) {
        $("#bg-layer-front").appendTo(originalParent);
      }
    }
  }

  // Run on page load and window resize
  moveBgLayer();
  $(window).on("resize", moveBgLayer);
});

