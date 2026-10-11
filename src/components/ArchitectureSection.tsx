import React, { useState, useEffect } from 'react';
import { Activity, RefreshCw } from 'lucide-react';

export const ArchitectureSection: React.FC = () => {
  const [telemetry, setTelemetry] = useState<{
    status: string;
    region: string;
    clusterLoad: string;
    p99Latency: string;
    throughput: string;
    greenEnergyIndex: string;
    activeNodes: number;
  }>({
    status: 'ONLINE',
    region: 'ap-southeast-1 (Hanoi / Singapore)',
    clusterLoad: '93.8%',
    p99Latency: '8.14ms',
    throughput: '42,950 req/s',
    greenEnergyIndex: '99.4%',
    activeNodes: 128
  });

  const [isRefreshing, setIsRefreshing] = useState(false);

  const fetchTelemetry = () => {
    setIsRefreshing(true);
    fetch('/api/telemetry')
      .then(res => res.json())
      .then(data => {
        setTelemetry(data);
        setIsRefreshing(false);
      })
      .catch(() => {
        setIsRefreshing(false);
      });
  };

  useEffect(() => {
    fetchTelemetry();
    const interval = setInterval(fetchTelemetry, 15000);
    return () => clearInterval(interval);
  }, []);

  return (
    <section id="architecture" className="relative py-28 px-6 sm:px-12 max-w-7xl mx-auto border-t border-white/10">
      <div className="flex items-center gap-3 text-xs tracking-widest uppercase text-emerald-400 font-semibold mb-6">
        <span>03</span>
        <span className="w-8 h-[1px] bg-emerald-400/40"></span>
        <span>Kiến Trúc Hạ Tầng 4 Lớp</span>
      </div>

      <div className="flex flex-col lg:flex-row lg:items-end justify-between gap-6 mb-12">
        <div className="max-w-2xl">
          <h2 className="text-3xl sm:text-4xl lg:text-5xl font-normal tracking-tight text-white leading-[1.15]">
            Hạ Tầng Suy Luận Đa Cụm Siêu Tốc
          </h2>
          <p className="text-zinc-400 text-base sm:text-lg mt-4 leading-relaxed">
            Thiết kế mô-đun hóa 4 tầng liên kết chặt chẽ giúp giải quyết triệt để nút thắt cổ chai băng thông bộ nhớ (Memory Bandwidth) và điều phối công việc liên tục.
          </p>
        </div>

        {/* Live Status Badge */}
        <div className="flex items-center gap-3 p-3 rounded-xl bg-zinc-900/80 border border-white/10 shrink-0">
          <div className="flex items-center gap-2">
            <span className="relative flex h-2.5 w-2.5">
              <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-emerald-400 opacity-75"></span>
              <span className="relative inline-flex rounded-full h-2.5 w-2.5 bg-emerald-500"></span>
            </span>
            <span className="text-xs font-mono font-medium text-white">CLUSTER STATUS: {telemetry.status}</span>
          </div>
          <button
            onClick={fetchTelemetry}
            className={`p-1.5 rounded-lg text-zinc-400 hover:text-white hover:bg-white/10 transition-colors cursor-pointer ${
              isRefreshing ? 'animate-spin' : ''
            }`}
            title="Làm mới thông số"
          >
            <RefreshCw className="w-3.5 h-3.5" />
          </button>
        </div>
      </div>

      {/* 4-Tier Interactive Topology */}
      <div className="space-y-4 mb-12">
        {/* Tier 4 */}
        <div className="p-6 rounded-2xl bg-zinc-950/80 border border-emerald-500/40 hover:border-emerald-500/60 transition-all">
          <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-2 mb-3">
            <div className="flex items-center gap-3">
              <span className="px-2.5 py-0.5 rounded text-[11px] font-mono bg-emerald-500/10 text-emerald-400 font-bold border border-emerald-500/20">
                TIER 4
              </span>
              <h3 className="text-lg font-semibold text-white">Agentic Orchestration & Interface Gateway</h3>
            </div>
            <span className="text-xs font-mono text-zinc-400">REST • gRPC • WebSockets • MicroVM Sandboxes</span>
          </div>
          <p className="text-xs text-zinc-300 leading-relaxed max-w-4xl">
            Tầng giao tiếp và điều phối Agent: Quản lý phiên làm việc đa người dùng, lưu trữ ngữ cảnh bộ nhớ dài hạn phân tán (Distributed Vector Cache), phân quyền RBAC và thực thi công cụ trong hộp cát cô lập.
          </p>
        </div>

        {/* Tier 3 */}
        <div className="p-6 rounded-2xl bg-zinc-950/80 border border-white/10 hover:border-white/20 transition-all">
          <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-2 mb-3">
            <div className="flex items-center gap-3">
              <span className="px-2.5 py-0.5 rounded text-[11px] font-mono bg-white/10 text-white font-bold">
                TIER 3
              </span>
              <h3 className="text-lg font-semibold text-white">High-Throughput Inference Engine</h3>
            </div>
            <span className="text-xs font-mono text-zinc-400">PagedAttention • Speculative Decoding • FlashAttention-3</span>
          </div>
          <p className="text-xs text-zinc-400 leading-relaxed max-w-4xl">
            Động cơ suy luận song song: Tối ưu hóa phân mảnh KV-cache trên VRAM, lượng tử hóa trọng số động (Dynamic Weight Quantization) và cơ chế Continuous Batching giữ độ trễ luôn ổn định dưới tải cao.
          </p>
        </div>

        {/* Tier 2 */}
        <div className="p-6 rounded-2xl bg-zinc-950/80 border border-white/10 hover:border-white/20 transition-all">
          <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-2 mb-3">
            <div className="flex items-center gap-3">
              <span className="px-2.5 py-0.5 rounded text-[11px] font-mono bg-white/10 text-white font-bold">
                TIER 2
              </span>
              <h3 className="text-lg font-semibold text-white">Distributed Model Sharding & Storage</h3>
            </div>
            <span className="text-xs font-mono text-zinc-400">Ray Cluster • Kubernetes • NVMe-oF Zero-Copy</span>
          </div>
          <p className="text-xs text-zinc-400 leading-relaxed max-w-4xl">
            Lớp nạp trọng số siêu tốc: Kỹ thuật Tensor & Pipeline Parallelism phân bổ mô hình kích thước khổng lồ qua mạng liên kết RoCE v2 / InfiniBand, nạp checkpoint mô hình 70B trong vòng 1.5 giây.
          </p>
        </div>

        {/* Tier 1 */}
        <div className="p-6 rounded-2xl bg-zinc-950/80 border border-white/10 hover:border-white/20 transition-all">
          <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-2 mb-3">
            <div className="flex items-center gap-3">
              <span className="px-2.5 py-0.5 rounded text-[11px] font-mono bg-white/10 text-white font-bold">
                TIER 1
              </span>
              <h3 className="text-lg font-semibold text-white">Hardware Accelerators & Carbon-Aware Grid</h3>
            </div>
            <span className="text-xs font-mono text-zinc-400">NVIDIA H100 / L40S / Apple Silicon • PUE &lt; 1.15</span>
          </div>
          <p className="text-xs text-zinc-400 leading-relaxed max-w-4xl">
            Phần cứng gia tốc & Năng lượng xanh: Trung tâm dữ liệu sử dụng năng lượng tái tạo, thuật toán điều phối thông minh di dời các tác vụ tính toán lớn theo nguồn phát năng lượng xanh sẵn có.
          </p>
        </div>
      </div>

      {/* Live Cluster Metrics */}
      <div className="p-6 rounded-2xl bg-white/[0.02] border border-white/10">
        <div className="flex items-center gap-2 text-xs font-semibold uppercase text-zinc-400 tracking-wider mb-4">
          <Activity className="w-4 h-4 text-emerald-400" />
          <span>Thông số cụm máy chủ thời gian thực (Live Cluster Telemetry)</span>
        </div>

        <div className="grid grid-cols-2 sm:grid-cols-4 gap-4">
          <div className="p-4 rounded-xl bg-zinc-950 border border-white/5">
            <div className="text-xs text-zinc-500">Độ trễ p99 (Latency)</div>
            <div className="text-2xl font-mono font-bold text-emerald-400 mt-1">{telemetry.p99Latency}</div>
            <div className="text-[11px] text-zinc-500 mt-1">Chuẩn sub-10ms cam kết</div>
          </div>

          <div className="p-4 rounded-xl bg-zinc-950 border border-white/5">
            <div className="text-xs text-zinc-500">Thông lượng (Throughput)</div>
            <div className="text-2xl font-mono font-bold text-white mt-1">{telemetry.throughput}</div>
            <div className="text-[11px] text-zinc-500 mt-1">Request đồng thời</div>
          </div>

          <div className="p-4 rounded-xl bg-zinc-950 border border-white/5">
            <div className="text-xs text-zinc-500">Tải cụm GPU (Cluster Load)</div>
            <div className="text-2xl font-mono font-bold text-white mt-1">{telemetry.clusterLoad}</div>
            <div className="text-[11px] text-zinc-500 mt-1">{telemetry.activeNodes} Nodes gia tốc</div>
          </div>

          <div className="p-4 rounded-xl bg-zinc-950 border border-white/5">
            <div className="text-xs text-zinc-500">Chỉ số Năng lượng Xanh</div>
            <div className="text-2xl font-mono font-bold text-emerald-400 mt-1">{telemetry.greenEnergyIndex}</div>
            <div className="text-[11px] text-zinc-500 mt-1">Tối ưu phát thải carbon</div>
          </div>
        </div>
      </div>
    </section>
  );
};
