.congreso-container {
  max-width: 1200px;
  margin: 0 auto;
  padding: 80px 20px 20px;
  font-family: Arial, sans-serif;
  line-height: 1.6;
  background: #ffffff;
}
  
  h1 {
    color: #004A98;
    font-size: 28px;
    font-weight: bold;
    margin-bottom: 5px;
  }
  
  h2 {
    font-size: 24px;
    font-weight: bold;
    color: #004A98;
    margin-top: 40px;
    margin-bottom: 10px;
    border-bottom: 2px solid #2C3E50;
    padding-bottom: 5px;
  }
  
  p, ul {
    color: #34495E;
    text-align: justify;
    font-size: 18px;
  }
  
  ul {
    list-style-type: none;
    padding: 0;
  }
  
  li {
    margin: 5px 0;
  }
  
  /* Secciones sin cajas */
  section {
    margin-bottom: 30px;
  }
  
  /* Tablas */
  .table-container {
    display: flex;
    justify-content: center;
    overflow-x: auto;
  }
  
  .table {
    width: 100%;
    max-width: 800px;
    border-collapse: collapse;
    margin-top: 10px;
    background: #ffffff;
    box-shadow: 0px 4px 6px rgba(0, 0, 0, 0.1);
    border-radius: 8px;
    overflow: hidden;
  }
  
  .table th, .table td {
    border: 1px solid #2C3E50;
    padding: 12px;
    text-align: center;
    font-size: 16px;
  }
  
  .table th {
    background: #2C3E50;
    color: #ffffff;
    font-weight: bold;
  }
  
  .table tbody tr:nth-child(even) {
    background: #f2f2f2;
  }
  
  .table tbody tr:hover {
    background: #dcdcdc;
    transition: 0.3s ease-in-out;
  }
  
  /* Responsividad */
  @media (max-width: 768px) {
    .congreso-container {
      padding: 15px;
    }
    h1 {
      font-size: 24px;
    }
    h2 {
      font-size: 20px;
    }
    p, ul {
      font-size: 16px;
    }
    .table {
      font-size: 14px;
    }
  }
  
  @media (max-width: 480px) {
    h1 {
      font-size: 22px;
    }
    h2 {
      font-size: 18px;
    }
    p, li {
      font-size: 14px;
    }
    .table {
      font-size: 12px;
    }
    .table th, .table td {
      padding: 8px;
    }
  }