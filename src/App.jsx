export default function App() {
  const products = [
    "Power Banks",
    "Chargers",
    "Earbuds",
    "Cables",
    "Gaming",
    "Smart Watches",
  ]

  return (
    <div style={{
      background:'#050505',
      color:'white',
      minHeight:'100vh',
      fontFamily:'Arial'
    }}>

      <header style={{
        display:'flex',
        justifyContent:'space-between',
        alignItems:'center',
        padding:'20px 40px',
        borderBottom:'1px solid #222'
      }}>
        <h1>
          TM <span style={{color:'#3b82f6'}}>Mobile</span>
        </h1>

        <button style={{
          background:'#2563eb',
          color:'white',
          border:'none',
          padding:'12px 20px',
          borderRadius:'12px',
          cursor:'pointer'
        }}>
          WhatsApp Order
        </button>
      </header>

      <section style={{
        padding:'100px 40px',
        display:'grid',
        gridTemplateColumns:'1fr 1fr',
        gap:'40px',
        alignItems:'center'
      }}>

        <div>
          <p style={{
            color:'#3b82f6',
            letterSpacing:'4px'
          }}>
            MOXOM COLLECTION
          </p>

          <h2 style={{
            fontSize:'70px',
            margin:'20px 0'
          }}>
            Power Your Lifestyle
          </h2>

          <p style={{
            color:'#aaa',
            lineHeight:'32px',
            fontSize:'18px'
          }}>
            Official MOXOM accessories available now at TM Mobile.
          </p>

          <button style={{
            marginTop:'30px',
            background:'#2563eb',
            border:'none',
            color:'white',
            padding:'15px 30px',
            borderRadius:'14px',
            fontSize:'16px'
          }}>
            Shop Now
          </button>
        </div>

        <img
          src="https://images.unsplash.com/photo-1511707171634-5f897ff02aa9?q=80&w=1200&auto=format&fit=crop"
          style={{
            width:'100%',
            borderRadius:'30px'
          }}
        />
      </section>

      <section style={{
        padding:'40px'
      }}>
        <h3 style={{
          fontSize:'40px',
          marginBottom:'30px'
        }}>
          Categories
        </h3>

        <div style={{
          display:'grid',
          gridTemplateColumns:'repeat(3,1fr)',
          gap:'20px'
        }}>
          {products.map((item)=>(
            <div key={item}
              style={{
                background:'#111',
                padding:'40px',
                borderRadius:'25px',
                border:'1px solid #222'
              }}
            >
              <h4>{item}</h4>
            </div>
          ))}
        </div>
      </section>

      <footer style={{
        marginTop:'80px',
        borderTop:'1px solid #222',
        padding:'30px',
        textAlign:'center',
        color:'#888'
      }}>
        TM Mobile - Official MOXOM Store
      </footer>

    </div>
  )
}
