import DefaultLayout from '@/component/Layout/DefaultLayout'
import '@/styles/globals.css'

export default function App({ Component, pageProps }) {
  return (
    <DefaultLayout>
      <Component {...pageProps} />
    </DefaultLayout>
  )
}
