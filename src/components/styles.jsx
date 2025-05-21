import styled from 'styled-components';

const HomeStyle = styled.div`
  font-family: 'Inter', Arial, sans-serif;
  background: #fff;
  min-height: 100vh;
  margin: 0;
  padding: 0;

  .Header {
    position: sticky;
    top: 0;
    z-index: 100;
    background: #fff;
    box-shadow: 0 2px 12px rgba(43, 42, 42, 0.04);
    display: flex;
    align-items: center;
    justify-content: flex-end;
    padding: 10px 3vw 1rem 3vw;
    gap: 10px 2rem;
    .logos {
      margin-right: auto;
      display: flex;
      gap: 1.5rem;
      img {
        height: 48px;
        width: auto;
        object-fit: contain;
      }
    }
    h1 {
      font-size: 2.1rem;
      font-weight: 700;
      color: #222;
      letter-spacing: -1px;
      margin: 0;
    }
    @media (max-width: 900px) {
      padding: 1.2rem 4vw 0.8rem 4vw;
      h1 {
        font-size: 2.1rem;
      }
      .logos img {
        height: 36px;
      }
    }
    @media (max-width: 700px) {
      flex-direction: column;
      align-items: flex-start;
      padding: 1rem 4vw 0.5rem 4vw;
      h1 {
        font-size: 1.3rem;
      }
      .logos {
        margin-bottom: 1rem;
      }
      .logos img {
        height: 28px;
      }
    }
  }

  .HeroImage {
    margin: 0;
    width: 100vw;
    height: 300px;
    overflow: hidden;
    img {
      width: 100%;
      height: 100%;
      object-fit: cover;
    }
    @media (max-width: 900px) {
      height: 270px;
    }
    @media (max-width: 700px) {
      height: 220px;
    }
  }

  .BlurNav {
    margin: 2rem auto 0 auto;
    display: flex;
    justify-content: center;
    gap: 2rem;
    background: rgba(210, 206, 206, 0.499);
    border-radius: 50px;
    box-shadow: 0 4px 30px rgba(43, 42, 42, 0.1);
    backdrop-filter: blur(8.6px);
    -webkit-backdrop-filter: blur(8.6px);
    border: 1px solid rgba(255, 255, 255, 0.81);
    padding: 0.5rem 3px;
    max-width: 600px;
    @media (max-width: 900px) {
      gap: 1.2rem;
      margin: 1rem 10px 0 10px;
      padding: 0.4rem 0.8rem;
    }
    @media (max-width: 700px) {
      gap: 0.5rem;
      padding: 0.3rem 0.5rem;
      border-radius: 1.2rem;
      margin: 1rem 10px 0 10px;
      font-size: 0.9rem;
    }
  }

  .NavButton {
    background: none;
    border: none;
    font-size: 1rem;
    font-weight: 500;
    color: #333;
    padding: 0.5rem 1.2rem;
    border-radius: 1.2rem;
    cursor: pointer;
    transition: background 0.2s, color 0.2s;
    &.active,
    &:hover {
      background: rgba(152, 152, 152, 0.8) ;
      color: #fff;
    }
    @media (max-width: 900px) {
      font-size: 1rem;
      padding: 0.4rem 0.8rem;
    }
    @media (max-width: 700px) {
      font-size: 0.9rem;
      padding: 0.3rem 0.5rem;
    }
  }

  .CTAButton {
    display: inline-block;
    margin: 1.2rem 0 0.5rem 0;
    padding: 0.7rem 2.2rem;
    background: linear-gradient(90deg, #2b72ff 0%, #00c6ff 100%);
    color: #fff;
    font-size: 1rem;
    font-weight: 600;
    border: none;
    border-radius: 2rem;
    box-shadow: 0 2px 12px rgba(43, 114, 255, 0.08);
    cursor: pointer;
    text-decoration: none;
    transition: background 0.2s, transform 0.2s, box-shadow 0.2s;
    &:hover, &:focus {
      background: linear-gradient(90deg, #005bea 0%, #00c6ff 100%);
      transform: translateY(-2px) scale(1.04);
      box-shadow: 0 4px 18px rgba(43, 114, 255, 0.15);
      color: #fff;
    }
    @media (max-width: 700px) {
      font-size: 1rem;
      padding: 0.6rem 1.2rem;
    }
  }

  .Footer {
    width: 100%;
    text-align: center;
    padding: 1.2rem 0 1.2rem 0;
    font-size: 1rem;
    color: #888;
    background: none;
    margin-top: 3rem;
    letter-spacing: 0.01em;
    border-top: 1px solid #eee;
    a {
      color: #2b72ff;
      text-decoration: underline;
      font-weight: 500;
      transition: color 0.2s;
      &:hover {
        color: #005bea;
      }
    }
    @media (max-width: 700px) {
      font-size: 0.92rem;
      padding: 1rem 0;
    }
  }

  .PageContent {
    max-width: 800px;
    padding: 3px 10px;
    margin: 3rem auto 0 auto;
    text-align: center;
    h2 {
      font-size: 1.6rem;
      font-weight: 700;
      margin-bottom: 1rem;
    }
    p {
      font-size: 1rem;
      color: #444;
      line-height: 1.7;
    }
    ul {
      list-style-type: none;
      padding: 0;
      li {
        font-size: 1rem;
        color: #444;
        line-height: 1.7;
        margin-bottom: 0.5rem;
      }
    }
    @media (max-width: 900px) {
      margin-top: 2rem;
      h2 {
        font-size: 1.5rem;
      }
      p, ul li {
        font-size: 1rem;
      }
    }
    @media (max-width: 700px) {
      margin-top: 1.2rem;
      h2 {
        font-size: 1.1rem;
      }
      p, ul li {
        font-size: 0.92rem;
      }
    }
  }
`;

export default HomeStyle;
