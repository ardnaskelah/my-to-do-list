import { ListItemText, styled } from "@mui/material";

export const ListItemStyled = styled(ListItemText)`
	span {
		max-width: calc(100% - 20px);
		overflow: hidden;
		text-overflow: ellipsis;
	}
`;
