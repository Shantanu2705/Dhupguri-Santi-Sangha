import React from 'react';
import Image from 'next/image';
import { Users, Award, Shield, UserCheck } from 'lucide-react';
import { COMMITTEE_GROUPS, CLUB_INFO } from '../data/clubData';
import { BengaliMotif } from './BengaliMotif';

export const CommitteeSection: React.FC = () => {
  const presidentGroup = COMMITTEE_GROUPS.find((g) => g.groupTitle === 'President');
  const generalSecretaryGroup = COMMITTEE_GROUPS.find((g) => g.groupTitle === 'General Secretary');
  const vicePresidentsGroup = COMMITTEE_GROUPS.find((g) => g.groupTitle === 'Vice Presidents');
  const assistantSecretariesGroup = COMMITTEE_GROUPS.find((g) => g.groupTitle === 'Assistant Secretaries');
  const treasurersGroup = COMMITTEE_GROUPS.find((g) => g.groupTitle === 'Treasurers');
  const gameSecretariesGroup = COMMITTEE_GROUPS.find((g) => g.groupTitle === 'Game Secretaries');
  const culturalSecretariesGroup = COMMITTEE_GROUPS.find((g) => g.groupTitle === 'Cultural Secretaries');
  const executiveMembersGroup = COMMITTEE_GROUPS.find((g) => g.groupTitle === 'Executive Members');

  return (
    <section id="committee" className="py-16 lg:py-24 bg-[#F8F6EB] relative overflow-hidden">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        {/* Section Header */}
        <div className="text-center max-w-3xl mx-auto mb-14">
          <div className="inline-flex items-center gap-2 px-3.5 py-1 rounded-full bg-[#145A32]/10 border border-[#145A32]/20 text-xs font-semibold text-[#145A32] uppercase tracking-widest mb-3">
            <Users className="w-3.5 h-3.5 text-[#C6A75E]" />
            Club Governance &amp; Stewards
          </div>
          <h2 className="text-3xl sm:text-4xl lg:text-5xl font-serif-heritage font-bold text-[#0B3D25] tracking-tight">
            Our Managing Committee
          </h2>
          <BengaliMotif variant="flourish" color="#C6A75E" className="mt-3" />
          <p className="mt-3 text-base text-[#4F5E52] font-light max-w-xl mx-auto">
            Honorable office bearers and executive members committed to upholding the noble ideals of Dhupguri Santi Sangha.
          </p>
        </div>

        {/* Committee in Action Real Photograph Banner */}
        <div className="max-w-5xl mx-auto mb-14 rounded-2xl overflow-hidden border border-[#145A32]/20 shadow-xl bg-white">
          <div className="grid grid-cols-1 md:grid-cols-12 items-center">
            <div className="md:col-span-7 relative aspect-[16/10] bg-[#072617]">
              <Image
                src="/images/committee-executive-meeting.jpg"
                alt="Dhupguri Santi Sangha Managing Committee executive meeting session"
                fill
                sizes="(max-width: 768px) 100vw, 600px"
                className="object-cover"
              />
            </div>
            <div className="md:col-span-5 p-6 sm:p-8 bg-gradient-to-br from-[#FAF8F2] to-[#F2EEDC]">
              <span className="text-[11px] font-bold text-[#9E813B] uppercase tracking-wider block mb-1">
                Executive Governance
              </span>
              <h3 className="text-xl font-serif-heritage font-bold text-[#0B3D25] mb-2">
                Managing Committee in Session
              </h3>
              <p className="text-xs sm:text-sm text-[#4F5E52] leading-relaxed mb-4">
                Committee members gathered in the Santi Sangha hall for strategic planning of community welfare initiatives, sports development, and cultural celebrations.
              </p>
              <div className="flex items-center gap-2 text-xs font-semibold text-[#145A32]">
                <UserCheck className="w-4 h-4 text-[#C6A75E]" />
                <span>Elected Under Club Constitution • Regd. S/50499</span>
              </div>
            </div>
          </div>
        </div>

        {/* Top Tier: President (Visually Prominent) & General Secretary */}
        <div className="max-w-4xl mx-auto mb-10 grid grid-cols-1 md:grid-cols-2 gap-6">
          {/* President Card - Highlighted Prominently */}
          {presidentGroup?.members.map((member) => (
            <div
              key={member.name}
              className="bg-gradient-to-br from-[#0B3D25] via-[#145A32] to-[#072617] text-white p-8 rounded-2xl border-2 border-[#DFC483] shadow-xl relative overflow-hidden group"
            >
              <div className="absolute top-0 right-0 w-32 h-32 bg-[#DFC483]/10 rounded-full blur-2xl pointer-events-none" />
              <div className="flex items-center justify-between mb-4">
                <span className="px-3 py-1 rounded-full text-xs font-bold uppercase tracking-widest bg-[#DFC483] text-[#072617] shadow-sm">
                  PRESIDENT
                </span>
                <Award className="w-6 h-6 text-[#DFC483]" />
              </div>
              <h3 className="text-2xl sm:text-3xl font-serif-heritage font-bold text-white tracking-wide mt-2">
                {member.name}
              </h3>
              <p className="text-xs text-[#DFC483] mt-1 font-medium tracking-wider uppercase">
                Official Head &amp; Primary Club Contact
              </p>
              <div className="mt-6 pt-4 border-t border-[#DFC483]/30 flex items-center justify-between text-xs text-[#F2EEDC]/90">
                <span>Phone: {CLUB_INFO.contact.phone}</span>
                <span className="text-[#DFC483]">Dhupguri, WB</span>
              </div>
            </div>
          ))}

          {/* General Secretary Card */}
          {generalSecretaryGroup?.members.map((member) => (
            <div
              key={member.name}
              className="bg-white p-8 rounded-2xl border-2 border-[#145A32] shadow-lg relative overflow-hidden group hover:border-[#C6A75E] transition-colors"
            >
              <div className="flex items-center justify-between mb-4">
                <span className="px-3 py-1 rounded-full text-xs font-bold uppercase tracking-widest bg-[#145A32] text-[#DFC483]">
                  GENERAL SECRETARY
                </span>
                <Shield className="w-6 h-6 text-[#145A32]" />
              </div>
              <h3 className="text-2xl sm:text-3xl font-serif-heritage font-bold text-[#0B3D25] tracking-wide mt-2">
                {member.name}
              </h3>
              <p className="text-xs text-[#9E813B] mt-1 font-medium tracking-wider uppercase">
                Executive Administration &amp; Operations
              </p>
              <div className="mt-6 pt-4 border-t border-[#145A32]/10 flex items-center justify-between text-xs text-[#4F5E52]">
                <span>Dhupguri Santi Sangha</span>
                <span className="font-semibold text-[#145A32]">Managing Committee</span>
              </div>
            </div>
          ))}
        </div>

        {/* Second Tier: Vice Presidents & Treasurers */}
        <div className="max-w-5xl mx-auto mb-10 grid grid-cols-1 md:grid-cols-2 gap-6">
          {/* Vice Presidents */}
          <div className="bg-white p-6 rounded-2xl border border-[#145A32]/15 shadow-sm">
            <div className="flex items-center gap-2 mb-4 pb-2 border-b border-[#145A32]/10">
              <span className="w-2 h-2 rounded-full bg-[#C6A75E]" />
              <h4 className="text-xs font-bold uppercase tracking-widest text-[#145A32]">
                VICE PRESIDENTS
              </h4>
            </div>
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-3">
              {vicePresidentsGroup?.members.map((m) => (
                <div key={m.name} className="p-3 rounded-xl bg-[#FAF8F2] border border-[#145A32]/10">
                  <span className="block text-sm font-serif-heritage font-bold text-[#0B3D25]">
                    {m.name}
                  </span>
                  <span className="text-[11px] text-[#9E813B] font-medium">Vice President</span>
                </div>
              ))}
            </div>
          </div>

          {/* Treasurers */}
          <div className="bg-white p-6 rounded-2xl border border-[#145A32]/15 shadow-sm">
            <div className="flex items-center gap-2 mb-4 pb-2 border-b border-[#145A32]/10">
              <span className="w-2 h-2 rounded-full bg-[#C6A75E]" />
              <h4 className="text-xs font-bold uppercase tracking-widest text-[#145A32]">
                TREASURERS
              </h4>
            </div>
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-3">
              {treasurersGroup?.members.map((m) => (
                <div key={m.name} className="p-3 rounded-xl bg-[#FAF8F2] border border-[#145A32]/10">
                  <span className="block text-sm font-serif-heritage font-bold text-[#0B3D25]">
                    {m.name}
                  </span>
                  <span className="text-[11px] text-[#9E813B] font-medium">Treasurer</span>
                </div>
              ))}
            </div>
          </div>
        </div>

        {/* Third Tier: Assistant Secretaries, Game Secretaries, Cultural Secretaries */}
        <div className="max-w-5xl mx-auto mb-10 grid grid-cols-1 md:grid-cols-3 gap-6">
          {/* Assistant Secretaries */}
          <div className="bg-white p-6 rounded-2xl border border-[#145A32]/15 shadow-sm">
            <div className="flex items-center gap-2 mb-4 pb-2 border-b border-[#145A32]/10">
              <span className="w-2 h-2 rounded-full bg-[#C6A75E]" />
              <h4 className="text-xs font-bold uppercase tracking-widest text-[#145A32]">
                ASSISTANT SECRETARIES
              </h4>
            </div>
            <div className="space-y-2">
              {assistantSecretariesGroup?.members.map((m) => (
                <div key={m.name} className="p-2.5 rounded-lg bg-[#FAF8F2] border border-[#145A32]/10">
                  <span className="block text-sm font-serif-heritage font-bold text-[#0B3D25]">
                    {m.name}
                  </span>
                  <span className="text-[10px] text-[#9E813B]">Assistant Secretary</span>
                </div>
              ))}
            </div>
          </div>

          {/* Game Secretaries */}
          <div className="bg-white p-6 rounded-2xl border border-[#145A32]/15 shadow-sm">
            <div className="flex items-center gap-2 mb-4 pb-2 border-b border-[#145A32]/10">
              <span className="w-2 h-2 rounded-full bg-[#C6A75E]" />
              <h4 className="text-xs font-bold uppercase tracking-widest text-[#145A32]">
                GAME SECRETARIES
              </h4>
            </div>
            <div className="space-y-2">
              {gameSecretariesGroup?.members.map((m) => (
                <div key={m.name} className="p-2.5 rounded-lg bg-[#FAF8F2] border border-[#145A32]/10">
                  <span className="block text-sm font-serif-heritage font-bold text-[#0B3D25]">
                    {m.name}
                  </span>
                  <span className="text-[10px] text-[#9E813B]">Game Secretary</span>
                </div>
              ))}
            </div>
          </div>

          {/* Cultural Secretaries */}
          <div className="bg-white p-6 rounded-2xl border border-[#145A32]/15 shadow-sm">
            <div className="flex items-center gap-2 mb-4 pb-2 border-b border-[#145A32]/10">
              <span className="w-2 h-2 rounded-full bg-[#C6A75E]" />
              <h4 className="text-xs font-bold uppercase tracking-widest text-[#145A32]">
                CULTURAL SECRETARIES
              </h4>
            </div>
            <div className="space-y-2">
              {culturalSecretariesGroup?.members.map((m) => (
                <div key={m.name} className="p-2.5 rounded-lg bg-[#FAF8F2] border border-[#145A32]/10">
                  <span className="block text-sm font-serif-heritage font-bold text-[#0B3D25]">
                    {m.name}
                  </span>
                  <span className="text-[10px] text-[#9E813B]">Cultural Secretary</span>
                </div>
              ))}
            </div>
          </div>
        </div>

        {/* Executive Members Directory Grid */}
        <div className="max-w-5xl mx-auto bg-white p-6 sm:p-8 rounded-2xl border border-[#145A32]/15 shadow-sm">
          <div className="flex items-center justify-between mb-6 pb-3 border-b border-[#145A32]/10">
            <div>
              <h4 className="text-xs sm:text-sm font-bold uppercase tracking-widest text-[#145A32]">
                EXECUTIVE MEMBERS
              </h4>
              <p className="text-xs text-[#4F5E52] mt-0.5">
                Valued members guiding regular operations and community outreach
              </p>
            </div>
            <span className="text-xs font-semibold text-[#9E813B] bg-[#F2EEDC] px-3 py-1 rounded-full">
              {executiveMembersGroup?.members.length} Members
            </span>
          </div>

          <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-4 gap-3">
            {executiveMembersGroup?.members.map((m) => (
              <div
                key={m.name}
                className="p-3 rounded-xl bg-[#FAF8F2] border border-[#145A32]/10 hover:border-[#C6A75E] transition-colors"
              >
                <div className="text-xs font-bold text-[#9E813B] uppercase tracking-wider mb-1">
                  Executive
                </div>
                <div className="text-sm font-serif-heritage font-bold text-[#0B3D25]">
                  {m.name}
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};

