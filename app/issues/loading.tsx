import {
  TableRoot,
  TableHeader,
  TableRow,
  TableColumnHeaderCell,
  TableBody,
  TableRowHeaderCell,
  TableCell,
} from "@radix-ui/themes";
import React from "react";
import Skeleton from "react-loading-skeleton";
import "react-loading-skeleton/dist/skeleton.css";
import IssuesActions from "./IssuesActions";

const LoadingIssuesPage = () => {
  const issues = [1, 2, 3, 4, 5];
  return (
    <div>
      <IssuesActions />
      <TableRoot variant="surface">
        <TableHeader>
          <TableRow>
            <TableColumnHeaderCell>Issue</TableColumnHeaderCell>
            <TableColumnHeaderCell className="hidden md:table-cell">
              Status
            </TableColumnHeaderCell>
            <TableColumnHeaderCell className="hidden md:table-cell">
              Created
            </TableColumnHeaderCell>
          </TableRow>
        </TableHeader>
        <TableBody>
          {issues.map((issue) => (
            <TableRow key={issue}>
              <TableRowHeaderCell>
                <Skeleton />
              </TableRowHeaderCell>
              <TableCell className="hidden md:table-cell">
                <Skeleton />
              </TableCell>
              <TableCell className="hidden md:table-cell">
                <Skeleton />
              </TableCell>
            </TableRow>
          ))}
        </TableBody>
      </TableRoot>
    </div>
  );
};

export default LoadingIssuesPage;
