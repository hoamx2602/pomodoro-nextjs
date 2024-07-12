"use client";

import TaskList from '@/components/task-list';
import React, { useState } from 'react';

const MyPage = () => {
  return (
    <div className="p-6 bg-red-600 min-h-screen">
      <h1 className="text-white text-2xl mb-4">Tasks</h1>
      <div className="bg-red-500 p-4 rounded-lg">
        <TaskList />
      </div>
    </div>
  );
};

export default MyPage;
