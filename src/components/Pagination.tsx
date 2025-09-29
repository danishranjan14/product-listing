import React from 'react';

type Props = {
  page: number;
  total: number;
  setPage: (p: number) => void;
};

export default function Pagination({ page, total, setPage }: Props) {
  if (total <= 1) return null;
  return (
    <div style={{ marginTop: 12, display: 'flex', gap: 8 }}>
      <button onClick={() => setPage(Math.max(1, page - 1))} disabled={page === 1}>
        Prev
      </button>
      <span>Page {page} of {total}</span>
      <button onClick={() => setPage(Math.min(total, page + 1))} disabled={page === total}>
        Next
      </button>
    </div>
  );
}
