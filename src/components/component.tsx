export function Component() {
  return (
    <div className="flex flex-col items-center justify-center min-h-screen">
      <main className="container mx-auto mt-8">
        <table className="w-full bg-white shadow-md rounded my-6">
          <thead>
            <tr>
              <th className="bg-gray-800 text-white py-2 px-4">Day</th>
              <th className="bg-gray-800 text-white py-2 px-4">Subject</th>
              <th className="bg-gray-800 text-white py-2 px-4">Schedule</th>
            </tr>
          </thead>
          <tbody>
            <tr>
              <td
                className="border px-4 py-2 text-black text-center"
                rowSpan={3}>
                Monday
              </td>
              <td className="border px-4 py-2 text-black text-center">
                CA Lab
              </td>
              <td className="border px-4 py-2 text-black text-center">
                11:00 - 13:00
              </td>
            </tr>
            <tr>
              <td className="border px-4 py-2 text-black text-center">
                Algorithms
              </td>
              <td className="border px-4 py-2 text-black text-center">
                13:30 - 14:30
              </td>
            </tr>
            <tr>
              <td className="border px-4 py-2 text-black text-center">
                Automata
              </td>
              <td className="border px-4 py-2 text-black text-center">
                14:30 - 15:30
              </td>
            </tr>
            <tr>
              <td
                rowSpan={4}
                className="border px-4 py-2 text-black text-center">
                Tuesday
              </td>
              <td className="border px-4 py-2 text-black text-center">
                CA Theory
              </td>
              <td className="border px-4 py-2 text-black text-center">
                10:00 - 11:00
              </td>
            </tr>
            <tr>
              <td className="border px-4 py-2 text-black text-center">
                Biology
              </td>
              <td className="border px-4 py-2 text-black text-center">
                11:00 - 12:00
              </td>
            </tr>
            <tr>
              <td className="border px-4 py-2 text-black text-center">
                Discrete Mathematics
              </td>
              <td className="border px-4 py-2 text-black text-center">
                12:00 - 13:00
              </td>
            </tr>
            <tr>
              <td className="border px-4 py-2 text-black text-center">
                Algorithms Lab
              </td>
              <td className="border px-4 py-2 text-black text-center">
                13:30 - 15:30
              </td>
            </tr>
            <tr>
              <td
                rowSpan={4}
                className="border px-4 py-2 text-black text-center">
                Wednesday
              </td>
              <td className="border px-4 py-2 text-black text-center">
                CA Lab
              </td>
              <td className="border px-4 py-2 text-black text-center">
                10:00 - 12:00
              </td>
            </tr>
            <tr>
              <td className="border px-4 py-2 text-black text-center">
                Algorithms
              </td>
              <td className="border px-4 py-2 text-black text-center">
                12:00 - 13:00
              </td>
            </tr>
            <tr>
              <td className="border px-4 py-2 text-black text-center">
                Discrete Mathematics
              </td>
              <td className="border px-4 py-2 text-black text-center">
                13:30 - 14:30
              </td>
            </tr>
            <tr>
              <td className="border px-4 py-2 text-black text-center">
                Biology
              </td>
              <td className="border px-4 py-2 text-black text-center">
                14:30 - 15:30
              </td>
            </tr>
            <tr>
              <td
                rowSpan={6}
                className="border px-4 py-2 text-black text-center">
                Thursday
              </td>
              <td className="border px-4 py-2 text-black text-center">
                Discrete Mathematics
              </td>
              <td className="border px-4 py-2 text-black text-center">
                10:00 - 11:00
              </td>
            </tr>
            <tr>
              <td className="border px-4 py-2 text-black text-center">EVS</td>
              <td className="border px-4 py-2 text-black text-center">
                11:00 - 12:00
              </td>
            </tr>
            <tr>
              <td className="border px-4 py-2 text-black text-center">
                Biology
              </td>
              <td className="border px-4 py-2 text-black text-center">
                12:00 - 13:00
              </td>
            </tr>
            <tr>
              <td className="border px-4 py-2 text-black text-center">CA</td>
              <td className="border px-4 py-2 text-black text-center">
                13:30 - 14:30
              </td>
            </tr>
            <tr>
              <td className="border px-4 py-2 text-black text-center">
                Automata
              </td>
              <td className="border px-4 py-2 text-black text-center">
                14:30 - 15:30
              </td>
            </tr>
            <tr>
              <td className="border px-4 py-2 text-black text-center">
                Algorithms lab
              </td>
              <td className="border px-4 py-2 text-black text-center">
                15:30 - 17:30
              </td>
            </tr>
            <tr>
              <td
                rowSpan={5}
                className="border px-4 py-2 text-black text-center">
                Friday
              </td>
              <td className="border px-4 py-2 text-black text-center">CA</td>
              <td className="border px-4 py-2 text-black text-center">
                10:00 - 11:00
              </td>
            </tr>
            <tr>
              <td className="border px-4 py-2 text-black text-center">EVS</td>
              <td className="border px-4 py-2 text-black text-center">
                11:00 -12:00
              </td>
            </tr>
            <tr>
              <td className="border px-4 py-2 text-black text-center">
                Automata
              </td>
              <td className="border px-4 py-2 text-black text-center">
                12:00 - 13:00
              </td>
            </tr>
            <tr>
              <td className="border px-4 py-2 text-black text-center">
                Algorithms
              </td>
              <td className="border px-4 py-2 text-black text-center">
                13:30 - 14:30
              </td>
            </tr>
            <tr>
              <td className="border px-4 py-2 text-black text-center">
                Discrete Mathematics
              </td>
              <td className="border px-4 py-2 text-black text-center">
                14:30 - 15:30
              </td>
            </tr>
          </tbody>
        </table>
      </main>
    </div>
  );
}
