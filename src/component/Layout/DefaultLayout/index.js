import Header from "../Header";

export default function DefaultLayout({children}) {
  return (<div>
    <Header/>
    {children}
  </div>)
}

