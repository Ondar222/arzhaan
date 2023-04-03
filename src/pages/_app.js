import '@/styles/globals.css'
import '@/styles/modal.css'
import '@/styles/header.css'
import '@/styles/footer.css'
import '@/styles/map.css'
import '@/styles/filter.css'
import '@/styles/scrolling.css'
import { Provider } from 'react-redux'
import { wrapper } from '@/store'



function App({ Component, pageProps }) {
  const { store, props } = wrapper.useWrappedStore(pageProps)
  return (
    <>
      <Provider store={store}>
        <Component {...pageProps} />
      </Provider>
    </>)
}

export default wrapper.withRedux(App)