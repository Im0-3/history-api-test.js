do ($) ->
  $ ->
    'use strict'
    currentURL = null

    fetchData = (url) ->
      $('.loader').removeClass 'is-end'
      currentURL = url
      if timer
        clearTimeout timer
      timer = setTimeout ->
        fetch = $.ajax
          url: url
          type: 'GET'
          content: '.content'
        .done (data) ->
          console.log data
          $('.content').prepend $(data).find('.content').html()
          $('.content')
            .find('img')
            .last()
            .fadeOut 500, ->
              $(this).remove()
              return
          $('.loader').delay(500).addClass 'is-end'
          return
      ,1000
      return

    $('.pager a').on 'click', (e) ->
      e.preventDefault()
      url = $(this).attr 'href'
      if url is currentURL
        return
      history.pushState null, null, url
      fetchData url
      return

    $(window).on 'popstate', (e) ->
      e.preventDefault()
      url = location.href
      if url is currentURL
        return
      fetchData url
      return

    return
  return
(jQuery)
