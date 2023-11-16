import prisma from "@/prisma/client";
import {
  Button,
  TableBody,
  TableCell,
  TableColumnHeaderCell,
  TableHeader,
  TableRoot,
  TableRow,
  TableRowHeaderCell,
} from "@radix-ui/themes";
import Link from "next/link";
import React from "react";
import IssueStatusBasge from "../components/IssueStatusBasge";
import delay from "delay";
import IssuesActions from "./IssuesActions";

const IssuesPage = async () => {
  const issues = await prisma.issue.findMany();
  await delay(2000);

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
            <TableRow key={issue.id}>
              <TableRowHeaderCell>
                <Link href={`/issues/${issue.id}`}>{issue.title}</Link>
                <div className="block md:hidden">{issue.status}</div>
              </TableRowHeaderCell>
              <TableCell className="hidden md:table-cell">
                <IssueStatusBasge status={issue.status} />
              </TableCell>
              <TableCell className="hidden md:table-cell">
                {issue.createdAt.toDateString()}
              </TableCell>
            </TableRow>
          ))}
        </TableBody>
      </TableRoot>
    </div>
  );
};

export default IssuesPage;
