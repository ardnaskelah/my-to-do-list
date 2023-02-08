import { styled } from "@mui/material";
import Button from "@mui/material/Button";

export const ItemWrapper = styled("div")`
display:flex;
justify-content: center;
padding:10px;
`

export const AddButton = styled(Button)`
margin-left: ${({ theme })=> theme.spacing(2)}
`