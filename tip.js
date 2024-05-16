const web3 = new Web3(Web3.givenProvider)

const form = document.querySelector("form")

const send = async function (amount) {
    const accounts = await window.ethereum.request({ method: "eth_requestAccounts" })

    const wei = web3.utils.toWei(amount, "ether")

    if (accounts.length > 0) {
        window.ethereum.request({ 
            method: "eth_sendTransaction",
            params: [{
                from: accounts[0],
                to: "0xD8F5276CbFB03A4752b2aa2347b3a3C66Bb38627",
                value: web3.utils.toHex(wei)
            }] 
        })
    }
}

if (window.ethereum) {
    form.classList.add("has-eth")    
}


form.addEventListener("submit", function (event) {
    event.preventDefault()

if (window.ethereum) {
    const input = form.querySelector("input")
    send(input.value)
} else {
    alert("Please install a wallet")
}
})