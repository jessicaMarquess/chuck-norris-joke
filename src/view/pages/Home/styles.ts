import styled from 'styled-components';

export const Container = styled.div`
    width: 80%;
    height: 100vh;
    margin: auto;
    .loader {
        display: flex;
        align-items: center;
        justify-content: center;
        height: 100vh;
        mix-blend-mode: multiply;
    }

    .content {
        display: flex;
        height: 100vh;
        flex-direction: column;
        justify-content: center;
        align-items: center;
        text-align: center;
    }
`;