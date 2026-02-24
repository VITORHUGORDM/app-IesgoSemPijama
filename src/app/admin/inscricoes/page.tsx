import { listarInscricoes } from "@/lib/db";

export const dynamic = "force-dynamic";

export default function AdminInscricoesPage() {
  const inscricoes = listarInscricoes();

  return (
    <main className="min-h-screen bg-black text-white px-4 py-10">
      <div className="max-w-5xl mx-auto space-y-6">
        <header className="space-y-2">
          <h1 className="text-3xl md:text-4xl font-black tracking-tight">
            Inscrições do Evento
          </h1>
          <p className="text-purple-200">
            Total de inscritos: <strong>{inscricoes.length}</strong>
          </p>
        </header>

        <section className="border border-purple-500/30 rounded-2xl overflow-hidden bg-black/60">
          {inscricoes.length === 0 ? (
            <p className="p-6 text-gray-300">
              Nenhuma inscrição registrada ainda.
            </p>
          ) : (
            <div className="overflow-x-auto">
              <table className="w-full min-w-[680px] text-left">
                <thead className="bg-purple-900/30 text-purple-100">
                  <tr>
                    <th className="px-4 py-3 font-semibold">ID</th>
                    <th className="px-4 py-3 font-semibold">Nome</th>
                    <th className="px-4 py-3 font-semibold">E-mail</th>
                    <th className="px-4 py-3 font-semibold">Data</th>
                  </tr>
                </thead>
                <tbody>
                  {inscricoes.map((inscricao) => (
                    <tr
                      key={inscricao.id}
                      className="border-t border-purple-500/20 hover:bg-purple-500/10"
                    >
                      <td className="px-4 py-3 text-gray-200">
                        {inscricao.id}
                      </td>
                      <td className="px-4 py-3">{inscricao.nome}</td>
                      <td className="px-4 py-3 text-purple-200">
                        {inscricao.email}
                      </td>
                      <td className="px-4 py-3 text-gray-300">
                        {new Date(inscricao.criado_em).toLocaleString("pt-BR")}
                      </td>
                    </tr>
                  ))}
                </tbody>
              </table>
            </div>
          )}
        </section>
      </div>
    </main>
  );
}
