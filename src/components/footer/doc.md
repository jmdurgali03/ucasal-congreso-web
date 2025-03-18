.footer {
    background-color: #004a99;
    color: white;
    padding: 30px 20px;
    text-align: center;
    font-size: 16px;
}
  
.footer-divider {
    width: 80%;
    height: 2px;
    background-color: white;
    margin: 0 auto 20px;
}
  
.footer-container {
    max-width: 1200px;
    margin: 0 auto;
    display: flex;
    flex-direction: column;
    gap: 15px;
}
  
.footer-section {
    margin-bottom: 10px;
}
  
.footer-section h4 {
    font-size: 18px;
    margin-bottom: 5px;
    font-weight: bold;
}
  
.footer a {
    color: #ffcc00;
    text-decoration: none;
    font-weight: bold;
}
  
.footer a:hover {
    text-decoration: underline;
}
  
@media (min-width: 768px) {
    .footer-container {
      flex-direction: row;
      justify-content: space-between;
      text-align: left;
    }
}
  