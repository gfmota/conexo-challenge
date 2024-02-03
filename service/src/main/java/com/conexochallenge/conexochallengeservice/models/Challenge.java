package com.conexochallenge.conexochallengeservice.models;

import com.conexochallenge.conexochallengeservice.models.dtos.ChallengeRequestDTO;
import jakarta.persistence.*;
import lombok.Data;
import lombok.NoArgsConstructor;

@Table(name = "challenge")
@Entity
@Data
@NoArgsConstructor
public class Challenge {
    @Id
    @GeneratedValue(strategy = GenerationType.UUID)
    private String id;

    private String topic1;

    private String word11;

    private String word12;

    private String word13;

    private String word14;

    private String topic2;

    private String word21;

    private String word22;

    private String word23;

    private String word24;

    private String topic3;

    private String word31;

    private String word32;

    private String word33;

    private String word34;

    private String topic4;

    private String word41;

    private String word42;

    private String word43;

    private String word44;

    public Challenge(ChallengeRequestDTO challengeRequestDTO) {
        this.topic1 = challengeRequestDTO.topic1();
        this.word11 = challengeRequestDTO.word11();
        this.word12 = challengeRequestDTO.word12();
        this.word13 = challengeRequestDTO.word13();
        this.word14 = challengeRequestDTO.word14();
        this.topic2 = challengeRequestDTO.topic2();
        this.word21 = challengeRequestDTO.word21();
        this.word22 = challengeRequestDTO.word22();
        this.word23 = challengeRequestDTO.word23();
        this.word24 = challengeRequestDTO.word24();
        this.topic3 = challengeRequestDTO.topic3();
        this.word31 = challengeRequestDTO.word31();
        this.word32 = challengeRequestDTO.word32();
        this.word33 = challengeRequestDTO.word33();
        this.word34 = challengeRequestDTO.word34();
        this.topic4 = challengeRequestDTO.topic4();
        this.word41 = challengeRequestDTO.word41();
        this.word42 = challengeRequestDTO.word42();
        this.word43 = challengeRequestDTO.word43();
        this.word44 = challengeRequestDTO.word44();
    }
}
