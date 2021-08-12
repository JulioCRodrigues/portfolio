import styled from 'styled-components'

export const Container = styled.header`

    background: #04080F;
    width: 100%;
    padding: 20px;

    h1{
            text-align: left;
            text-transform: uppercase;
            letter-spacing: 1.5px;
            font-size: 16px;

            transition: filter 0.2s;

            &:hover{
            filter: brightness(0.8)
          }
          a{
              text-decoration: none;
                color: #FFF;

          }
    }
    

   ul{
       display: flex;
       float: right;
       justify-content: center;
       align-items: center;
       margin-top: -20px;

       li{
            display: flex;
            margin: 0 24px;

            a{
                text-decoration: none;
                text-transform: uppercase;
                letter-spacing: 0.5px;
                color: #FFF;
            }
            

            i{
                color: #FFF;
                font-size: 24px;

                transition: filter 0.2s;
            }

            &:hover{
                filter: brightness(0.8);
            }
       }
       
   } 

   
`;