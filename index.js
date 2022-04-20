const images = document.querySelectorAll('img')

const callback = (entries) => {
  entries.forEach(entry => {
    if (entry.isIntersecting) {
      const image = entry.target
      const data_src = image.getAttribute('data-src')
      image.setAttribute('src', data_src)
      observer.unobserve(image)
    }
  })
}

const observer = new IntersectionObserver(callback)

// 使用 foreach 对每个 img 元素进行审查
images.forEach(image => {
  // 在每次循环的的时候,使用observer实例的 observer 方法,来观察每一个 img 节点
  observer.observe(image)
})

// 滚动事件 消耗性能 scroll 引起太多
// window.addEventListener('scroll', (e) => {
//   images.forEach((image) => {
//     // 得到每张图片距离 视口上方 的距离
//     const imageTop = image.getBoundingClientRect().top
//     if (imageTop < window.innerHeight) {
//       const data_src = image.getAttribute('data-src')
//       image.setAttribute('src', data_src)
//     }
//     console.log(1111111111111111111)
//   })
// })
