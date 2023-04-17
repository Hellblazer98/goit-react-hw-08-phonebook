import { List, ListItem } from "@mui/material";
import styled from "styled-components";

// export const List = styled.ul`
//     margin-top: 18px;
//     display: flex;
//     flex-direction: column;
//     gap: 15px;
// `;

// export const ListItem = styled.li`
//     display: flex;
//     align-items: center;
//     gap: 10px;
//     font-weight: 600;
// `

export const ListStyled = styled(List)`
    display: flex;
    margin: 0 auto;
    gap: 20px;
    flex-direction: column;
    background-color: rgba(220, 220, 220, 0.5);
    border-radius: 4px;
    border: 1px solid rgba(33, 33, 33, 0.2);
`;

export const ItemStyled = styled(ListItem)`
    display: flex;
`