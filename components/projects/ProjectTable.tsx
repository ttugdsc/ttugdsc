import * as React from "react";
import Table from "@mui/material/Table";
import TableBody from "@mui/material/TableBody";
import TableCell from "@mui/material/TableCell";
import TableContainer from "@mui/material/TableContainer";
import TableHead from "@mui/material/TableHead";
import TableRow from "@mui/material/TableRow";
import GitHubIcon from "@mui/icons-material/GitHub";
import Paper from "@mui/material/Paper";
import SocialButton from "../home/SocialButton";

function createData( //Helper function for filling up the table
  project: string,
  client: string,
  repo: string,
  dateStarted: Date,
  status: string
) {
  // Gives us easy access to these properties
  return { project, client, repo, dateStarted, status };
}

const rows = [
  // Later we'll prolly pull these from a database, for now they're hardcoded
  createData(
    // Peep how we're using the helper function
    "TTUGDSC Website",
    "TTUGDSC",
    "https://github.com/ttugdsc/ttugdsc",
    new Date("2022-07-19"),
    "In Progess"
  ),
  createData(
    "HackWesTX Hackathon Website",
    "HackWesTX",
    "https://github.com/ttugdsc/HackWesTX-Official-Repo",
    new Date("2022-02-24"),
    "Complete"
  ),
];

const ProjectTable = () => {
  return (
    // Table stuff copied from MUI docs and tweaked -> https://mui.com/components/tables/#basic-table
    <TableContainer component={Paper}>
      <Table sx={{ minWidth: 400 }} aria-label="simple table">
        <TableHead>
          <TableRow>
            <TableCell>Project Name</TableCell>
            <TableCell align="right">Client Organization</TableCell>
            <TableCell align="right">GitHub Repo</TableCell>
            <TableCell align="right">Date Started</TableCell>
            <TableCell align="right">Status</TableCell>
          </TableRow>
        </TableHead>
        <TableBody>
          {rows.map((row) => (
            <TableRow
              key={row.project}
              sx={{ "&:last-child td, &:last-child th": { border: 0 } }}
            >
              <TableCell component="th" scope="row">
                {row.project}
              </TableCell>
              <TableCell align="right">{row.client}</TableCell>
              <TableCell align="right">
                <SocialButton
                  // Main note being that we can add whatever react node we want
                  variant
                  link={row.repo}
                  label="Github"
                  icon={<GitHubIcon />}
                />
              </TableCell>
              <TableCell align="right">
                {row.dateStarted.toDateString()}
              </TableCell>
              <TableCell align="right">{row.status}</TableCell>
            </TableRow>
          ))}
        </TableBody>
      </Table>
    </TableContainer>
  );
};
export default ProjectTable;
