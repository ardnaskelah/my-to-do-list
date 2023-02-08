import { ListItemText, styled } from "@mui/material";

export const ListItemStyled = styled(ListItemText)<{ done: boolean }>`
	text-decoration: ${({ done }) => (done ? "line-through" : "none")};

	.MuiTypography-root {
		max-width: calc(100% - 30px);
		overflow: hidden;
		text-overflow: ellipsis;
	}
`;
