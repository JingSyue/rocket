import gsap from 'gsap';

// 進場動畫
export const fadeIn = (target, duration = 1) => {
  gsap.fromTo(target, { opacity: 0 }, { opacity: 1, duration });
};

// 元素移動動畫
export const slideIn = (target, fromX = -100, toX = 0, duration = 1) => {
  gsap.fromTo(target, { x: fromX }, { x: toX, duration });
};

// 滾動觸發動畫
export const scrollTriggerAnimation = (target, start = 'top 80%', end = 'top 20%', scrub = true) => {
  gsap.to(target, {
    scrollTrigger: {
      trigger: target,
      start,
      end,
      scrub,
    },
    opacity: 1,
    y: 0,
    ease: 'power2.inOut',
    duration: 1,
  });
};

// 使用 timeline 創建動畫序列
export const animateWithGsapTimeline = (timeline, elements, properties, trigger, startProperties) => {
  gsap.timeline({
    scrollTrigger: {
      trigger,
      start: 'top bottom',
      end: 'bottom top',
      scrub: true,
    },
  })
    .from(elements, startProperties)
    .to(elements, properties);
};
