addEventListener('fetch', (event) => {
  event.respondWith(handleRequest(event.request))
})

const r = {
  a: {
    b: {
      c: {
        d: 233,
      },
    },
  },
}

async function handleRequest(request) {
  return new Response(String(r?.a?.b?.c?.d), {
    status: 200,
  })
}
