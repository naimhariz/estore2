
import Head from 'next/head'
import Web3 from 'web3'
import 'bulma/css/bulma.css'
import styles from '../styles/estore.module.css'

const estore = () => {
    let web3

    //window.ethereum
    const connectWalletHandler = async () => {
        if(typeof window !== "undefined" && window.ethereum !== "undefined")
        {
            try
            {
                await window.ethereum.request({ method: "eth_requestAccounts" })
                web3 = new Web3(window.ethereum)
            }
            catch(err)
            {
                setError(err.message)
            }
            
        }
        else
        {
            console.log("Please install MetaMask")
        }
    }
    return(
        <div className={styles.main}>
            <Head>
                <title>RichBatClub</title>
                <meta name="description" content="A E-Store dapp" />
            </Head>
            <nav className='navbar mt-4 mb-4'>
                <div className='container'>
                    <div className='navbar-brand'>
                        <h1>E-Store</h1>
                    </div>
                    <div className='navbar-end'>
                        <button onClick={connectWalletHandler} className="button is-primary">Connect Wallet</button>
                    </div>
                </div>
            </nav>
            <section>
                <div className="container">
                    <p>placeholder text</p>
                </div>
            </section>
        </div>
    )
}

export default estore