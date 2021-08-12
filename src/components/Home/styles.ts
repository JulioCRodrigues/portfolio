import styled from 'styled-components'

export const Container = styled.main`

display: grid;
grid-template-columns: 1fr 1fr 1fr;

h2{
    text-align: center;
    margin-top: 80px;
    margin-bottom: 10px;
    text-transform: uppercase;
    letter-spacing: 0.5px;

    
}

p{
    margin-top: 10px;
    margin-left: 25px;
    text-align: justify;
    line-height: 28px;
    width: 80%;
}

img{
    
    border-radius: 50%;
    width: 300px;
    height: 300px;
    margin-top: 50px;
    transition: transform 0.2s;
    cursor: pointer;

    &:hover{
        transform: scale(1.1);
        border: 2px solid black;


    }

    

}

.skillname{
    text-align: center;
    padding: 5px;
    font-weight: bold;
}

/* Make sure that padding behaves as expected */
* {box-sizing:border-box}

/* Container for skill bars */
.container {
    display: flex;
    justify-content: center;
    border-radius: 8px;
    width: 90%; /* Full width */
}

.skills {
  border-radius: 8px;
  text-align: center; /* Right-align text */
  padding-top: 5px; /* Add top padding */
  padding-bottom: 5px; /* Add bottom padding */
  color: white; /* White text color */
}

.html {width: 50%; background-color: #04AA6D;} /* Green */
.css {width: 50%; background-color: #2196F3;} /* Blue */
.js {width: 50%; background-color: #FFD400;} /* Red */


`;
