/* eslint-env jest */

import mockData from "@/../tests/mockData";

export const getBooks = jest.fn().mockResolvedValue(mockData.BOOKS);

export const registerUser = jest.fn().mockResolvedValue(mockData.AUTH_RESPONSE);

export const login = jest.fn().mockResolvedValue(mockData.AUTH_RESPONSE);

export const { parseJWT, setToken } = jest.requireActual("@/api");

export const getUser = jest.fn().mockResolvedValue(mockData.SERVER_USER);

export const createList = jest.fn().mockResolvedValue(mockData.TEST_LIST);

export const getLists = jest
  .fn()
  .mockResolvedValueOnce([mockData.TEST_LIST])
  .mockResolvedValueOnce([mockData.TEST_LIST])
  .mockRejectedValueOnce({
    response: {
      status: 403
    }
  });

export const updateList = jest.fn().mockResolvedValue(null);
