package com.conexochallenge.conexochallengeservice.models;

import com.conexochallenge.conexochallengeservice.models.dtos.ChallengeDTO;
import jakarta.persistence.*;
import lombok.Data;

@Table(name = "challenge")
@Entity
@Data
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

    public Challenge(ChallengeDTO challengeDTO) {
        this.topic1 = challengeDTO.topic1();
        this.word11 = challengeDTO.word11();
        this.word12 = challengeDTO.word12();
        this.word13 = challengeDTO.word13();
        this.word14 = challengeDTO.word14();
        this.topic2 = challengeDTO.topic2();
        this.word21 = challengeDTO.word21();
        this.word22 = challengeDTO.word22();
        this.word23 = challengeDTO.word23();
        this.word24 = challengeDTO.word24();
        this.topic3 = challengeDTO.topic3();
        this.word31 = challengeDTO.word31();
        this.word32 = challengeDTO.word32();
        this.word33 = challengeDTO.word33();
        this.word34 = challengeDTO.word34();
        this.topic4 = challengeDTO.topic4();
        this.word41 = challengeDTO.word41();
        this.word42 = challengeDTO.word42();
        this.word43 = challengeDTO.word43();
        this.word44 = challengeDTO.word44();
    }
}
