import { act, renderHook } from "@testing-library/react";
import { useArray } from "./UseArray";

describe("UseArray test suites", () => {
  describe("UseArray with numbers", () => {
    it("Should return initial Array", () => {
      const initialArray = [1, 2, 3, 4, 5, 6];
      const renderResult = renderHook(() => useArray(initialArray));
      expect(renderResult.result.current.array).toEqual(initialArray);
    });

    it("Should add new elements to Array", () => {
      const initialArray = [1, 2, 3, 4, 5, 6];
      const renderResult = renderHook(() => useArray(initialArray));
      act(() => {
        renderResult.result.current.push(7);
      });
      expect(renderResult.result.current.array).toEqual([...initialArray, 7]);
    });

    it("Should change elements of Array", () => {
      const initialArray = [1, 2, 3, 4, 5, 6];
      const renderResult = renderHook(() => useArray(initialArray));
      act(() => {
        renderResult.result.current.update(0, 2);
      });
      expect(renderResult.result.current.array[0]).toEqual(2);
    });

    it("Should remove elements of Array", () => {
      const initialArray = [1, 2, 3, 4, 5, 6];
      const renderResult = renderHook(() => useArray(initialArray));
      act(() => {
        renderResult.result.current.remove(0);
      });
      expect(renderResult.result.current.array).not.toContain(1);
    });

    it("Should filter elements of Array", () => {
      const initialArray = [1, 2, 3, 4, 5, 6];
      const renderResult = renderHook(() => useArray(initialArray));
      act(() => {
        renderResult.result.current.filter((n) => n < 5);
      });
      expect(renderResult.result.current.array).toEqual([1, 2, 3, 4]);
    });

    describe("UseArray with strings", () => {
      it("Should remove elements of array - elements that do not start with uppercase", () => {
        const initialArray = ["A", "B", "apple", "Map"];
        const renderResult = renderHook(() => useArray(initialArray));
        act(() => {
          renderResult.result.current.filter((word: string) => {
            return word[0] === word[0].toUpperCase();
          });
        });
        expect(renderResult.result.current.array).toEqual(["A", "B", "Map"]);
      });
    });
  });
});
/* import { renderHook, act } from "@testing-library/react";
import { useArray } from './UseArray'

describe('UseArray test suites', () => {
    describe('UseArray with numbers', () => {

        it('should return initial array', () => {
            const initialArray = [1, 2, 3, 4, 5, 6]
            const renderResult = renderHook(() => useArray(initialArray))
            expect(renderResult.result.current.array).toEqual(initialArray)
        })

        it('should add new elements to array', () => {
            const initialArray = [1, 2, 3, 4, 5, 6]
            const renderResult = renderHook(() => useArray(initialArray))
            act(() => {
                renderResult.result.current.push(7)
            })
            expect(renderResult.result.current.array).toEqual([...initialArray, 7])
        })

        it('should change elements of array', () => {
            const initialArray = [1, 2, 3, 4, 5, 6]
            const renderResult = renderHook(() => useArray(initialArray))
            act(() => {
                renderResult.result.current.update(0, 2)
            })
            expect(renderResult.result.current.array[0]).toEqual(2)
        })

        it('should remove elements of array', () => {
            const initialArray = [1, 2, 3, 4, 5, 6]
            const renderResult = renderHook(() => useArray(initialArray))
            act(() => {
                renderResult.result.current.remove(0)
            })
            expect(renderResult.result.current.array).not.toContain(1)
        })

        it('should filter elements of array - less than', () => {
            const initialArray = [1, 2, 3, 4, 5, 6]
            const renderResult = renderHook(() => useArray(initialArray))
            act(() => {
                renderResult.result.current.filter(n => n < 5)
            })
            expect(renderResult.result.current.array).toEqual([1, 2, 3, 4])
        })
    });

    // homework
    describe('UseArray with strings', () => {
        it.todo('should remove elements of array - elements that do not start with UpperCase', () => {
            // const initialArray = ['A', 'B', 'apple', 'Map']
            // const renderResult = renderHook(() => useArray(initialArray))

        })
    })

}); */
