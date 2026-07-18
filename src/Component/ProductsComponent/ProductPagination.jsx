"use client";

import { Pagination } from "@heroui/react";
import { useRouter, useSearchParams } from "next/navigation";
import { useEffect, useState } from "react";

export default function ProductPagination({
  currentPage,
  totalPages,
  totalProducts,
}) {
  const router = useRouter();
  const searchParams = useSearchParams();

  const [page, setPage] = useState(currentPage);

  // Keep state in sync with URL/API
  useEffect(() => {
    setPage(currentPage);
  }, [currentPage]);

  const itemsPerPage = 12; // Must match backend limit

  const changePage = (newPage) => {
    if (newPage < 1 || newPage > totalPages) return;

    const params = new URLSearchParams(searchParams.toString());
    params.set("page", newPage);

    setPage(newPage);
    router.push(`/all-products?${params.toString()}`);
  };

  const getPageNumbers = () => {
    if (totalPages <= 1) return [1];

    const pages = [];

    // First page
    pages.push(1);

    // Left ellipsis
    if (page > 3) {
      pages.push("ellipsis-start");
    }

    // Middle pages
    const start = Math.max(2, page - 1);
    const end = Math.min(totalPages - 1, page + 1);

    for (let i = start; i <= end; i++) {
      pages.push(i);
    }

    // Right ellipsis
    if (page < totalPages - 2) {
      pages.push("ellipsis-end");
    }

    // Last page (only if different from first)
    if (totalPages > 1) {
      pages.push(totalPages);
    }

    return pages;
  };

  const startItem =
    totalProducts === 0 ? 0 : (page - 1) * itemsPerPage + 1;

  const endItem = Math.min(page * itemsPerPage, totalProducts);

  return (
    <Pagination className="w-full">
      <Pagination.Summary>
        Showing {startItem}-{endItem} of {totalProducts} results
      </Pagination.Summary>

      <Pagination.Content>
        <Pagination.Item>
          <Pagination.Previous
            isDisabled={page === 1}
            onPress={() => changePage(page - 1)}
          >
            <Pagination.PreviousIcon />
            <span>Previous</span>
          </Pagination.Previous>
        </Pagination.Item>

        {getPageNumbers().map((p, index) =>
          p === "ellipsis-start" || p === "ellipsis-end" ? (
            <Pagination.Item key={p}>
              <Pagination.Ellipsis />
            </Pagination.Item>
          ) : (
            <Pagination.Item key={`page-${p}`}>
              <Pagination.Link
                isActive={p === page}
                onPress={() => changePage(p)}
              >
                {p}
              </Pagination.Link>
            </Pagination.Item>
          )
        )}

        <Pagination.Item>
          <Pagination.Next
            isDisabled={page === totalPages}
            onPress={() => changePage(page + 1)}
          >
            <span>Next</span>
            <Pagination.NextIcon />
          </Pagination.Next>
        </Pagination.Item>
      </Pagination.Content>
    </Pagination>
  );
}