window.addEventListener('scroll', e => {
    document.body.style.cssText += `--scrollTop: ${this.scrollY}px` // += because we are going to add our styles as well;
})

gsap.registerPlugin(ScrollTrigger,ScrollSmoother)
ScrollSmoother.create(
    wrapper = ".wrapper",
    content = ".content"
)