$(document).ready(() => {
  $('.close-alert').click(() => {
      $('.alert').alert('close')
  })

  //關閉觸發
  $('.alert').on('close.bs.alert', () => {
    console.log('close alert')
  })

  //完全關閉
  $('.alert').on('closed.bs.alert', () => {
    console.log('closed alert')
  })

  //carousel 控制時間
  // $('.carousel').carousel({
  //   interval: 1000
  // })

  $('.carousel').on('slide.bs.carousel', (event) => {
    console.log('slide: ', `
      方向: ${ event.direction }
      從: ${ event.from }
      到: ${ event.to }
    `)
  })

  $('.carousel').on('slid.bs.carousel', (event) => {
    console.log('slid: ', `
      方向: ${ event.direction }
      從: ${ event.from }
      到: ${ event.to }
    `)
  })

  $('#dropdown-demo').on('show.bs.dropdown', () =>{
    console.log('show')
  })
  $('#dropdown-demo').on('shown.bs.dropdown', () =>{
    console.log('shown')
  })
  $('#dropdown-demo').on('hide.bs.dropdown', () =>{
    console.log('hide')
  })
  $('#dropdown-demo').on('hidden.bs.dropdown', () =>{
    console.log('hidden')
  })
})
